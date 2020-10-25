import React, { useState } from 'react'
import Modal from 'react-modal'


Modal.setAppElement('#root')

const Part = (props) => {
  const [modalOpen, setModalOpen] = useState(false)
  return (
    <div>

      <button onClick={() => setModalOpen(true)}
       className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
        {props.company}</button>
      <Modal isOpen={modalOpen}>
        <h2 className="font-bold text-4xl">{props.company}</h2>
        <p>Job title: {props.title}</p> <br />
        <p>Started: {props.startMonth} {props.startYear}</p> <br />
        <p>Ended: {props.endMonth} {props.endYear}</p> <br />
        <div>
        <button onClick={() => setModalOpen(false)}
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded opacity-50">Sulje ikkuna</button>
          </div>
      </Modal>
    </div>
  )
}

const Content = (props) => {
  const details = props.details.map((d) => {
    return (<Part key={d.id}
      company={d.companyName}
      title={d.title}
      startMonth={d.startMonth}
      startYear={d.startYear}
      endMonth={d.endMonth}
      endYear={d.endYear} />)
  })
  return (
    <div>{details}</div>
  )
}



const Job = (props) => {

  return (
    <div>

      <Content details={props.job.details} />
    </div>
  )
}

export default Job