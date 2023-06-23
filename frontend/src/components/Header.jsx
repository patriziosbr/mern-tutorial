import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'
import { Link, useNavigate, NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../features/auth/authSlice'

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function Header() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)

  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/')
  }

  return (
    <>
    <Navbar className="bg-body-tertiary" fixed="top">
      <Container>
      <Navbar.Brand href='/'>Notify</Navbar.Brand>
          <Nav className="me-auto">
            {/* <NavLink style={{marginRight:'10px', textDecoration:"none"}} className="text-dark" activeclassname="active" to='/'>GoalSetter</NavLink> */}
            {/* <NavLink style={{marginRight:'10px', textDecoration:"none"}} className="text-dark" activeclassname="active" to='/add-event'>Add Event</NavLink> */}
            <NavLink style={{marginRight:'10px', textDecoration:"none"}} className="text-dark" activeclassname="active" to='/events'>Events</NavLink>
          </Nav>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            {user ? (
              <button className='btn' onClick={onLogout}>
                <FaSignOutAlt /> Logout
              </button>
            ) : (
              <>
                <NavLink to='/login' style={{marginRight:'10px', textDecoration:"none"}} >
                  <FaSignInAlt /> Login
                </NavLink>
                <NavLink to='/register' style={{marginRight:'10px', textDecoration:"none"}}>
                  <FaUser /> Register
                </NavLink>
              </>
            )}
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    {/* <header className='header'>
      <div style={{display:'flex'}}>
        <div style={{marginRight:'10px'}}>
          <NavLink activeclassname="active" to='/'>GoalSetter</NavLink>
        </div>
        <div style={{marginRight:'10px'}}>
          <NavLink activeclassname="active" to='/add-event'>Add Event</NavLink>
        </div>
        <div style={{marginRight:'10px'}}>
          <NavLink activeclassname="active" to='/events'>Events</NavLink>
        </div>
      </div>
      <ul>
        {user ? (
          <li>
            <button className='btn' onClick={onLogout}>
              <FaSignOutAlt /> Logout
            </button>
          </li>
        ) : (
          <>
            <li>
              <NavLink to='/login'>
                <FaSignInAlt /> Login
              </NavLink>
            </li>
            <li>
              <NavLink to='/register'>
                <FaUser /> Register
              </NavLink>
            </li>
          </>
        )}
      </ul>
    </header> */}
    </>
  )
}

export default Header
