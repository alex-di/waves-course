function auth() {
  WavesKeeper
    ? WavesKeeper.auth({ data: "some dta"})
      .then(auth => console.log('AUTH SUCCESS', { auth }))
      .catch(error => console.error( error ))
    : alert('NO WAVES KEEPER')
}

export default function () {
  return (<div>
    <input type="submit" onClick={auth}/>
  </div>)
}
