app.get('/eski-url', (req, res) => {
    res.status(301).redirect('https://www.yenidomain.com/yeni-sayfa');
});