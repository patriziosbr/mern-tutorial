import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import Spinner from '../components/Spinner'
import WithHeaderAndQuoteExample from '../components/WithHeaderAndQuoteExample'
import { getEvents, reset } from '../features/events/eventSlice'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
      <Container style={{marginTop: "80px"}}>
        <Row>
          <Col>
            <section className='heading'>
              <h1>Welcome {user && user.name}</h1>
              <p>Event Dashboard</p>
            </section>

            <section className=''>
            {events.map((event) => (
              <WithHeaderAndQuoteExample event={event}/>

            ))}
            </section>
          </Col>
        </Row>
      </Container>




    </>
  )
}

export default Dashboard
