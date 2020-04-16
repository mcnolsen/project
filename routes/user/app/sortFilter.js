const Board = require('../../../models/Board');
const BookedBoard = require('../../../models/BookedBoards');

const getTimes = async (boardID, date) =>{
    const chosenBoard = await Board.findById(boardID);
    const times = [];
    try{
        for(count=0; count < 23; count++){
            const foundTime = await BookedBoard.findOne({'bookedBoard': chosenBoard, 'bookedDate': date, 'bookedTime': count});
            if (foundTime){
            //Skal ikke pushe til arrayet med tider, hvis der er et match
            }
            else if (!foundTime){
                times.push(count);
            }
        }
    }
    catch (err) {
        if (err) {
            console.log(err);
        }
    }
    return times;
}
const getRequest = (user) =>{
    const mineBookningerFunction = async () => {
        const bookningerAlle = await BookedBoard.find({'bookedBy': user}, (err, bookninger) =>{
            return bookninger;
            //.populate til at få hele det bookede board, så vi har adgang til det givne boards data i stedet for kun id'et
        }).populate('bookedBoard');
        return bookingSort(bookningerAlle);
    }
    const bookingSort = (mineBookninger) => {
        //Vil kun have aktuelle boards her, altså de bookninger som er i dag eller efter dags dato
        let today = new Date();

        const filteredBookings = mineBookninger.filter(booking => booking.bookedDate >= today);
        //Sortering af dato og tid
        filteredBookings.sort((a, b) => {
            if (a.bookedDate > b.bookedDate){
             return 1;
            }
            else if (a.bookedDate < b.bookedDate){
                return -1;
            }
            //Hvis datoen er den samme, så sorter efter tid her
            else {
                if (a.bookedTime > b.bookedTime){
                    return 1;
                }
                else if(a.bookedTime < b.bookedTime) {
                    return -1;
                }
                else {
                    return 0;
                }
            }
        })
        return filteredBookings;
    }
    return mineBookningerFunction();

}

exports.getRequest = getRequest;
exports.getTimes = getTimes;