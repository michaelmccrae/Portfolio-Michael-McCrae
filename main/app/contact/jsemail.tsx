export default function EmailObfuscator() {
    // Email parts are constructed with a simple assembly function
    const constructEmail = () => {
      const username = ['m', 'i', 'k', 'e'].join('');
      const domain = ['m', 'c', 'c', 'r', 'a', 'e'].join('');
      const tld = ['c', 'a'].join('');
      
      return `${username}@${domain}.${tld}`;
    };
    
    // Construct the mailto link
    const mailtoLink = `mailto:${constructEmail()}`;
    
    return (
      <div className="">
        <h2>Contact Me</h2>
        
          <p className="">
            {/* Render the email by calling the function directly in JSX */}
            {constructEmail()}
          </p>
          <p><a 
            className=""
            href={mailtoLink}
          >
            Send Email
          </a></p>
       
       
      </div>
    );
  }