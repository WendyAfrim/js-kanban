const pattern = new URLPattern({
    hostname: 'http://localhost:*',
    pathname: '/(tasks|kanban|members|tasks:*)'
})

export default pattern;
