const Content = () => {

    // const handleNameChange = () => {
    //     const names =['Gowtham Sankar','Jay Kumar','Manoj','Karthik'];
    //     const int = Math.floor(Math.random() * 4);
    //     return names[int];
    // }

    const user = {
        name: 'Gowtham Sankar',
        imageUrl: 'https://gouthamguna.github.io/Portfolio-.com/assets/img/about.jpg',
        imageSize: 90,
    };

    return(
        <main>
            <p>
                <h1>{user.name}</h1>
                <img
                    className="avatar"
                    src={user.imageUrl}
                    alt={'Photo of ' + user.name}
                    style={{
                    width: user.imageSize,
                    height: user.imageSize  
                }}
            />
            </p>
        </main>
    );
}

export default Content;