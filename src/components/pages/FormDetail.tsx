import * as React from 'react'
import { Field } from '../../models/HubspotForm'
import { DefaultComponentProps } from '../../state'
import { Loader } from '../shared/Loader'

interface FormDetailProps extends DefaultComponentProps {

}

export const FormDetailPage = (props: FormDetailProps) => {
  if (props.appState.currentPage.kind != 'form-detail') return <span></span>
  if (props.appState.current_form.kind != 'loaded') return <Loader />
  if (props.appState.current_submissions.kind != 'loaded') return <Loader />

  let form = props.appState.current_form.value
  let submission = props.appState.current_submissions.value

  return <div className='App container'>
    <h1>Form details for '{form.name}' form</h1>

    <div className="row">
      <div className="col-6">

        <form onSubmit={e => {
          e.preventDefault()
          console.log("Submit")
        }}>
          {form.formFieldGroups.map(field_group => field_group.fields.map(field => <FormRenderer
            key={field.objectTypeId}
            field={field}
            value=""
            errors=""
            handleInputChange={e => console.log(e)}
            handleValidation={e => console.log(e)}
          />))}

          <button type="submit" className="btn btn-primary">{form.submitText ? form.submitText : "Submit"}</button>
        </form>


      </div>
      <div className="col-6">
        {submission.results.map(res => <div className="card" key={res.submittedAt}>
          <ul>
            {res.values.map(answer => <li key={answer.objectTypeId}><b>{answer.name}</b>: {answer.value}</li>)}
          </ul>
        </div>)}
      </div>
    </div>

  </div>

}

interface HubspotRendererProps {
  field: Field
  value: string
  errors: string
  handleInputChange(e: any): void
  handleValidation(e: any): void
}

const FormRenderer = (props: HubspotRendererProps) => {
  const { field, value, errors, handleValidation, handleInputChange } = props

  switch (field.fieldType) {
    case 'textarea':
      return (
        <div className='form-group'>
          <label>
            {field.label}
          </label>
          <textarea
            className="form-control"
            id={field.name}
            name={(field.name)}
            aria-invalid={!!errors}
            value={value ? value : ''}
            rows={4}
            onChange={(e) => handleInputChange(e)}
            onBlur={(e) => handleValidation(e)}
          ></textarea>
        </div>
      )
    case 'booleancheckbox':
      return (
        <div className="form-group">
          <input
            className="form-control"
            type="checkbox"
            id={(field.name)}
            name={(field.name)}
            aria-invalid={!!errors}
            defaultChecked={false}
            onChange={(e) => handleInputChange(e)}
            onBlur={(e) => handleValidation(e)}
          />
          <label
            dangerouslySetInnerHTML={{ __html: field.label }}
          />
        </div>
      )
    case 'radio':
      return (
        <div className="form-group">
          {field.options.length >= 1
            ? field.options.map((option) => (
              <div className="form-group">
                <input
                  type="radio"
                  name={(field.name)}
                  id={(option.label)}
                  value={option.value}
                  aria-invalid={!!errors}
                  hidden={option.hidden}
                  onChange={(e) => handleInputChange(e)}
                  onBlur={(e) => handleValidation(e)}
                />
                <label>
                  {field.label}
                </label>
              </div>
            ))
            : <div className="form-formgroup">
              <input
                type="radio"
                name={(field.name)}
                id={(field.label)}
                aria-invalid={!!errors}
                onChange={(e) => handleInputChange(e)}
                onBlur={(e) => handleValidation(e)}
              />
              <label>
                {field.label}
              </label>
            </div>
          }
        </div>
      )
    case 'select':
      return (
        <div className="form-group">
          <label>
            {field.label}
          </label>
          <div>
            <select
              className="form-control"
              id={(field.name)}
              name={(field.name)}
            >
              {field.options.map((option) => (
                <option value={option.value}>{option.label}</option>
              ))}
            </select>
          </div>
        </div>
      )
    case 'number':
      return (
        <div className="form-group">
          <label>
            {field.label}
          </label>
          <input
            className="form-control"
            type="number"
            id={(field.name)}
            name={(field.name)}
            placeholder={`${field.label || field.name}${field.required ? '*' : ''}`}
            aria-invalid={!!errors}
            onChange={(e) => handleInputChange(e)}
            onBlur={(e) => handleValidation(e)}
            value={value ? value : ''}
          />
        </div>
      )
    case 'date':
      return (
        <div className="form-group">
          <label>
            {field.label}
          </label>
          <input
            className="form-control"
            type="date"
            id={(field.name)}
            name={(field.name)}
            placeholder={`${field.label || field.name}${field.required ? '*' : ''}`}
            aria-invalid={!!errors}
            onChange={(e) => handleInputChange(e)}
            onBlur={(e) => handleValidation(e)}
            value={value ? value : ''}
          />
        </div>
      )
    case 'text':
      return (
        <div className="form-group">
          <label>
            {field.label}
          </label>
          <input
            className="form-control"
            type={field.name.includes("phone") ? "tel" : "text"}
            id={(field.name)}
            name={(field.name)}
            aria-invalid={!!errors}
            onChange={(e) => handleInputChange(e)}
            onBlur={(e) => handleValidation(e)}
            value={value ? value : ''}
          />
        </div>
      )
    case 'file':
      return (
        <div className="form-group">
          <label>
            {field.label}
          </label>
          <input
            className="form-control"
            type='file'
            id={(field.name)}
            name={(field.name)}
            aria-invalid={!!errors}
            aria-describedby={!!errors ? (field.name) : ''}
            onBlur={(e) => handleValidation(e)}
            onChange={(e) => handleInputChange(e)}
          />
        </div>
      )
    default:
      return <div>Field for '{field.fieldType}' is not implemented.</div>
  }
}