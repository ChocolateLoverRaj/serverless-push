import { type FunctionComponent } from 'preact'
import './ably'
import { usePresence } from '@ably-labs/react-hooks'
import { useEffect, useState } from 'preact/hooks'
import type PresenceData from './PresenceData'
import parse from 'json-parse-safe'

const getData = (name: string): string => {
  const presenceData: PresenceData = {
    name,
    sending: true
  }
  return JSON.stringify(presenceData)
}

const AddCollaborator: FunctionComponent = () => {
  // TODO: this may not be needed
  const [name, setName] = useState('A person')
  const [presenceData, updateStatus] = usePresence(getData(name), name)

  // FIXME: initial update not needed
  useEffect(() => {
    updateStatus(getData(name))
  }, [name])

  console.log(presenceData)

  return (
    <>
      <label>
        Your name:
        <input
          value={name}
          onChange={({ target }) => { setName((target as HTMLInputElement).value) }}
        />
      </label>
      <br />
      People you can share with:
      <ul>
        {presenceData
          .map(({ id, data }) => ({ id, data: parse(data) }))
          .filter(({ data: { error } }) => error === undefined)
          .map(({ id, data: { value } }) => ({ id, data: value as PresenceData }))
          .filter(({ data }) => !data.sending)
          .map(({ id, data: { name } }) => (
            <li key={id}>{name} <code>{id}</code></li>
          ))}
      </ul>
    </>
  )
}

export default AddCollaborator
