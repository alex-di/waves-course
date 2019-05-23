import Head from 'next/head'

function auth() {
  WavesKeeper
    ? WavesKeeper.auth({ data: "some dta"})
      .then(auth => console.log('AUTH SUCCESS', { auth }))
      .catch(error => console.error( error ))
    : alert('NO WAVES KEEPER')
}

export default function () {
  return (<div className="container">
    <Head>
      <meta charset="UTF-8" />
      <title>Mastering Web3 with Waves boilerplte</title>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous" />
    </Head>
    <h1>dAPP fetus</h1>
    <input className="btn btn-primary" type="submit" onClick={auth}/>
  </div>)
}
