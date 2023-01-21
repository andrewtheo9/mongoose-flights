const Flight = require('../models/flight')

module.exports = {
    index,
    new: newFlight,
    create,
    show
}

function show(req, res) {
    Flight.findById(req.params.id)
      .exec(function (err, flight) {
          console.log(flight);
          res.render("flights/show", { title: "Flight Detail", flight });
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