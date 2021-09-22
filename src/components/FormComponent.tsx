import { ChangeEvent, FormEvent, useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { RouteComponentProps } from 'react-router-dom'

interface FormComponentProps {
  // this is an interface for MY OWN props, the ones I'm passing to FormComponent explicitely
  title: string
}

type MixedProps = RouteComponentProps & FormComponentProps

const FormComponent = ({ location, title, ...restprops }: MixedProps) => {
  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [checkbox, setCheckbox] = useState(false)

  const handleInput = (value: string | boolean, stateProperty: string) => {
    if (stateProperty === 'name') {
      setName(value as string)
    } else if (stateProperty === 'surname') {
      setSurname(value as string)
    } else {
      setCheckbox(value as boolean)
    }
  }

  // RAFA'S APPROACH, CURRENTLY DOESN'T WORK :(
  //   const handleInput = (value: string | boolean, stateProperty: string) => {
  //     ;[`set${stateProperty}`](value)
  //   }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    console.log(location.pathname)
    // in a class component the object is already saved into this.state.form,
    // here we need to collect individually the properties and create an object
    const objectToSend = {
      name,
      surname,
      checkbox,
    }

    // this is your object, you can stringify it and send it to the API
  }

  return (
    <Form onSubmit={handleSubmit}>
      <h1>{title}</h1>
      <Form.Group>
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e: ChangeEvent<HTMLInputElement>) => handleInput(e.target.value, 'name')}
        />
        <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
      </Form.Group>
      <Form.Group>
        <Form.Label>Surname</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter surname"
          value={surname}
          onChange={(e: ChangeEvent<HTMLInputElement>) => handleInput(e.target.value, 'surname')}
        />
      </Form.Group>
      <Form.Group>
        <Form.Check
          type="checkbox"
          label="Strive student?"
          checked={checkbox}
          onChange={(e: ChangeEvent<HTMLInputElement>) => handleInput(e.target.checked, 'checkbox')}
        />
      </Form.Group>
      <Button variant="danger" type="submit">
        Submit
      </Button>
    </Form>
  )
}

export default FormComponent
