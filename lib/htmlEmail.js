export const htmlEmail = (name, message) => {
  return (
    <div style={{ fontFamily: `'Courier New', sans-serif, 'Open Sans'` }}>
      <h1>Hello {name}</h1>
      <p>This is a confirmation, that your message to academic-records.com has indeed been received sucessfully.<br />We&apos;ll come back to you as soon as possible.</p>
      <p>Thank you so much!</p>
      <div style={{ marginTop: '40px' }}>
        <p>Your message:<br />{message}</p>
      </div>
    </div>
  )
}
