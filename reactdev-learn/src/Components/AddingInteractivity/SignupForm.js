export default function SignUp() {
    /*
        e.preventDefault() demo
        Some browser events have default behavior associated with them. For example, 
        a <form> submit event, which happens when a button inside of it is clicked, 
        will reload the whole page by default. Call e.preventDefault() to stop this from happening
        
        //e.preventDefault()  = prevents the default browser behavior for the few events that have it.
    */
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault(); 
        alert("Submitting!");
      }}
    >
      <input />
      <button type="submit">Send</button>
    </form>
  );
}
