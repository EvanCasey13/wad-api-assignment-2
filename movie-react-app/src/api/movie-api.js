export const login = (username, password) => {
    return fetch('/api/users', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({ username: username, password: password })
    }).then(res => res.json())
};

export const signup = (username, password) => {
    return fetch('/api/users?action=register', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({ username: username, password: password })
    }).then(res => res.json())
};

export const getMovies = () => {
    return fetch(
       '/api/movies', {
            headers: {
                'Authorization': window.localStorage.getItem('token')
            }
        }
    ).then(res => {
        return res.json();
    }).catch((error) => {
        console.log(error);
    });
  };

  export const getGenres = () => {
    return fetch(
       '/api/genres', {
            headers: {
                'Authorization': window.localStorage.getItem('token')
            }
        }
    ).then(res => {
        return res.json();
    }).catch((error) => {
        console.log(error);
    });
  };

  export const getMovie = (args) => {
    const [, idPart] = args.queryKey;
    const { id } = idPart;
    return fetch(
        `/api/movies/${id}`, {
            headers: {
                'Authorization': window.localStorage.getItem('token')
            }
        }
    ).then(res => {
        return res.json();
    }).catch((error) => {
        console.log(error);
    });
  };

  
  export const getAllActors = () => {
    return fetch(
       '/api/actors', {
            headers: {
                'Authorization': window.localStorage.getItem('token')
            }
        }
    ).then(res => {
        return res.json();
    }).catch((error) => {
        console.log(error);
    });
  };