import Depan from './assets/pages/Depan'

function App() {
  return (
    <>
      <Depan />
    </>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Hidden route for login */}
        <Route path="/auth/v1/secure-login" element={<Login />} />
      </Routes>
    </Router>
  )
}

export default App
