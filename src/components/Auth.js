import React from 'react'

const onLogin = event => {
  event.preventDefault()
  console.log('Login')
}

const onSignUp = event => {
  event.preventDefault()
  console.log('SignUp!!!')
}

const onLogOut = event => {
  event.preventDefault()
  console.log('LogOut!')
}

const Auth = () =>
  <div id='authentication'>
    <form className='form-inline'>
      <fieldset>
        <div className='form-element'>
          <label htmlFor='txtEmail'>Email</label>
          <input type='email' id='txtEmail' placeholder='Email' className='form-input' />
        </div>
        <div className='form-element'>
          <label htmlFor='txtPassword'>Password</label>
          <input type='password' id='txtPassword' placeholder='Password' className='form-input' />
        </div>

        <button onClick={onLogin} type='submit' className='button button-primary' id='btnLogin'>Log in</button>
        <button onClick={onSignUp} type='submit' className='button button-primary' id='btnSignUp'>Sign up</button>
        <button onClick={onLogOut} type='submit' className='button button-primary hide' id='btnLogout'>Log out</button>
      </fieldset>
    </form>
  </div>

export default Auth
