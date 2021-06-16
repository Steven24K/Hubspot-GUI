import moment from 'moment'
import * as React from 'react'
import { DefaultComponentProps } from '../../state'
import { Loader } from '../shared/Loader'

interface FolderContentPageProps extends DefaultComponentProps {

}

export const FolderContentPage = (props: FolderContentPageProps) => {
  if (props.appState.currentPage.kind != 'folder-content') return <span></span>
  if (props.appState.current_folder.kind != 'loaded') return <Loader />

  return <div className='App container'>
    <h1>Folder content: '{props.appState.current_folder.value.totalCount}'</h1>

    <table className="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Size</th>
          <th>Type</th>
          <th>Created</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {props.appState.current_folder.value.objects
        .sort((a, b) => moment(b.created).unix() - moment(a.created).unix() )
        .map(file => <tr key={file.id}>
          <td>{file.id}</td>
          <td>
            {file.name}
            {["jpg", "jpeg", "png", "gif", "jfif"].includes(file.extension.toLocaleLowerCase()) ?
              <img src={file.friendly_url} alt={file.name} height="50px" width="80px" />
              : null
            }
          </td>
          <td>{file.size} Bytes</td>
          <td>{file.extension}</td>
          <td>{moment(file.created).format('hh:mm DD MMMM YYYY')}</td>
          <td>
            <a href={file.friendly_url} target="_blank">
              Download
            </a>
          </td>
        </tr>)}
      </tbody>
    </table>
  </div>

}