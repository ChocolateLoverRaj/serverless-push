import './app.css'
import type { FunctionComponent } from 'preact'
import AddCollaboratorButton from './AddCollaboratorButton'

export const App: FunctionComponent = () => {
  return (
    <>
      List goes here <br />
      <AddCollaboratorButton />
    </>
  )
}
