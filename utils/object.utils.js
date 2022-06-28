
exports.userObj = (user) =>{
    let users = [];
    user.forEach(ele => {
        users.push({
            name: ele.name,
            email: ele.email,
            userId: ele.userId,
            userTypes: ele.userTypes
        })
    });
    return users;
}

exports.bookObj = (booked) => {
    return {
        to: booked.to,
        from: booked.from,
        date: booked.date,
        airline: booked.airline,
        fromTime: booked.fromTime,
        toTime: booked.toTime,
        price: booked.price
    }
}

exports.arrayBooked = (book) => {
    let booked = [];
    book.forEach(ele => {
        booked.push({
            to: ele.to,
            from: ele.from,
            date: ele.date,
            airline: ele.airline,
            fromTime: ele.fromTime,
            toTime: ele.toTime,
            price: ele.price,
        })
    })
    return booked;
}

// Feedback form
exports.feedbackObj = (form) => {
  return {
    name: form.name,
    rating: form.rating,
    origin: form.origin,
    queryType: form.queryType
  };
};