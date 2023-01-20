const Flight = require('../models/flight')

module.exports = {
    index,
    new: newFlight,
    create,
    show
}

function show(req, res) {
    res.render('flights/show', {
      flight: Flight.getOne(req.params.id),
      title: 'Flight Details'
    });
  }

function index(req, res) {
    Flight.find({}, function(err, flights) {
        console.log(flights)
        res.render('flights/index', { flights })
    })
}

function newFlight(req, res) {
    res.render('flights/new')
}

function create(req, res) {
    const flight = new Flight(req.body);
    flight.save(function(err) {
        if (err) return res.redirect('/movies/new');
        console.log(flight);
        res.redirect('/flights');
    })
}