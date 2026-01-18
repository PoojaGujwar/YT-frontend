function Login() {
  const handleLogin = () => {
    window.location.href = "http://localhost:4000/auth/google";
  };

  return (
    <div style={{ display:"flex", flexDirection:"column", justifyContent:"center",alignItems:"center",height:"100vh",backgroundColor: "#f5f5f5",color:'#333'}}>
      <h1>YouTube Dashboard</h1>
      <button onClick={handleLogin} style={{color:"white",backgroundColor:"#1595fd",fontWeight:"bold",padding:"10px",border:"none",borderRadius:"5px"}}>Login with Google</button>
    </div>
  );
}

export default Login;
