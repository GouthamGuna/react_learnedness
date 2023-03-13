const Content = () => {
    const handleNameChange = () => {
        const names =['Gowtham Sankar','Jay Kumar','Manoj','Karthik'];
        const int = Math.floor(Math.random() * 4);
        return names[int];
    }

    return(
        <main>
            <p>
                Hello {handleNameChange()} !
            </p>
        </main>
    );
}

export default Content;