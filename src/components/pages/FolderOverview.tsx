import moment from 'moment'
import * as React from 'react'
import { NavLink } from 'react-router-dom'
import { DefaultComponentProps } from '../../state'
import { Loader } from '../shared/Loader'

interface FolderOverviewPageProps extends DefaultComponentProps {

}

export const FolderOverviewPage = (props: FolderOverviewPageProps) => {
  if (props.appState.currentPage.kind != 'folder-overview') return <span></span>
  if (props.appState.folders.kind != 'loaded') return <Loader />

  return <div className='App container'>
    <h1>Folders, {props.appState.folders.value.total_count}</h1>

    <table className="table">
      <thead>
        <tr>
          <th>Folder ID</th>
          <th>Name</th>
          <th>Full path</th>
          <th>Category</th>
          <th>Created</th>
        </tr>
      </thead>
      <tbody>
        {props.appState.folders.value.objects
        .sort((a, b) => moment(b.created).unix() - moment(a.created).unix() )
        .map(folder => <tr key={folder.id}>
          <td>{folder.id}</td>
          <td>{folder.name}</td>
          <td><NavLink to={`/folder/${folder.id}`}>{folder.full_path}</NavLink></td>
          <td>{folder.category}</td>
          <td>{moment(folder.created).format('hh:mm:ss DD MMMM YYYY')}</td>
        </tr>)}
      </tbody>

    </table>
  </div>

}