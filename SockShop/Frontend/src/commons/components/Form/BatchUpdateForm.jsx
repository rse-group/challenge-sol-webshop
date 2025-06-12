import React from 'react'

const BatchUpdateForm = props => {
  const { title, id_name, children } = props

  return (
    <div className="max-w-full prose">
      <h2 className="h2">{title}</h2>
      <form className="bg-white card shadow-xl max-w-full" id={id_name} {...props}>
        <div className="card-body overflow-x-auto">
          <fieldset className="flex flex-col gap-4">{children}</fieldset>
        </div>
      </form>
    </div>
  )
}

export default BatchUpdateForm
