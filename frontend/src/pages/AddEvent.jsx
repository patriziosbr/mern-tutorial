import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import EventForm from '../components/EventForm'
import Spinner from '../components/Spinner'

function Dashboard() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)
  const { events, isLoading, isError, message } = useSelector(
    (state) => state.events
  )

  useEffect(() => {
    // console.log(events); ??? undefinde

    if (isError) {
      console.log(message)
    }

    if (!user) {
      navigate('/login')
    }

  }, [user, navigate, isError, message, dispatch, events])

  if (isLoading) {
    return <Spinner />
  }

  return (
    <>
      <section className='heading'>
        <h1>Welcome {user && user.name}</h1>
      </section>

      <EventForm/>
    </>
  )
}

export default Dashboard
