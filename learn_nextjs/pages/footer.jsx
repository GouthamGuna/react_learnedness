import React from 'react'

const footer = () => {
    const today = new Date();
    return(
        <footer>
            <p>Copyright &copy; {today.getFullYear()} GMSK ⚛</p>
        </footer>
    );
}

export default footer