import {render, screen} from '@testing-library/react'
import {BrowserRouter, MemoryRouter} from 'react-router-dom'
import App,{LocationDisplay} from "../App"
import fireEvent from '@testing-library/user-event'


test('rendering a component that uses useLocation', () => {
    const route = '/users'
  
    render(
      <MemoryRouter initialEntries={[route]}>
        <LocationDisplay />
      </MemoryRouter>,
    )
  
    expect(screen.getByTestId('location-display')).toHaveTextContent(route)
  })

  
test('testing rendeing of element on route click', async()=>{
    render(<BrowserRouter><App/></BrowserRouter>)


    expect(screen.getByText(/Posts/i)).toBeInTheDocument();


    await fireEvent.click(screen.getByText(/Posts/i))


    expect(screen.getByText(/Posts List/i)).toBeInTheDocument();

})

test('landing on a bad page', () => {
    const badRoute = '/bad/route'
  
    // use <MemoryRouter> when you want to manually control the history
    render(
      <MemoryRouter initialEntries={[badRoute]}>
        <App />
      </MemoryRouter>,
    )
  
    // verify navigation to "no match" route
    expect(screen.getByText(/404 Not Found/i)).toBeInTheDocument()
  })