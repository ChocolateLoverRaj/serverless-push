import { type FunctionComponent } from 'preact'
import { useState } from 'preact/hooks'
import AddCollaborator from './AddCollaborator'

const AddCollaboratorButton: FunctionComponent = () => {
  const [adding, setAdding] = useState(false)

  return (
    <>
      <button onClick={() => { setAdding(adding => !adding) }}>
        {!adding ? 'Add Collaborator' : 'Close'}
      </button>
      {adding && (
        <>
          <br />
          <AddCollaborator />
        </>)}
    </>
  )
}

export default AddCollaboratorButton
