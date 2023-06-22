import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import Spinner from '../components/Spinner'
import { getEvents, reset } from '../features/events/eventSlice'

function Dashboard() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)
  const { events, isLoading, isError, message } = useSelector(
    (state) => state.events
  )

  useEffect(() => {
    if (isError) {
      console.log(message)
    }

    if (!user) {
      navigate('/login')
    }

    dispatch(getEvents())

    return () => {
      dispatch(reset())
    }
  }, [user, navigate, isError, message, dispatch])

  if (isLoading) {
    return <Spinner />
  }
  return (
    <>
      <section className='heading'>
        <h1>Welcome {user && user.name}</h1>
        <p>Event Dashboard</p>
      </section>

      <section className='content'>
        {events.length > 0 ? (
          <div>
            {events.map((event) => (
              <div key={event._id}>
                <p><b>{event.title}</b></p>
                <p>{event.email}</p>
                <p>{event.emailSent}</p>
                <p>{event.emailReciever}</p>
                <p>{event.startAt}</p>
                <p>{event.endAt}</p>
                <p>{event.hourStart}</p>
                <p>{event.hourEnd}</p>
                <p>{event.title}</p>
                <p>{event.bodyEvent}</p>
                <p>{event.createdAt}</p>
                <p>{event.updatedAt}</p>
              </div>
            ))}
          </div>
        ) : (
          <h3>You have not set any events</h3>
        )}
      </section>

    </>
  )
}

export default Dashboard
