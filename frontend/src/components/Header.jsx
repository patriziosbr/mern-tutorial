import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'
import { Link, useNavigate, NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../features/auth/authSlice'

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
    <header className='header'>
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
    </header>
  )
}

export default Header
