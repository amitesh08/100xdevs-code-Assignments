
enum direction {
    Up,
    Down,
    Right,
    Left,
}

function Something(keyPressed: direction ): void {
	// do something.
    if(keyPressed == direction.Up){
        console.log("up")
    }
}

Something(direction.Up)

/*---------------------------------------------------------------------------
-----------------real world example---------------------------------------

enum ResponseStatus {
    Success = 200,
    NotFound = 404,
    Error = 500
}

app.get("/', (req, res) => {
    if (!req.query.userId) {
			res.status(ResponseStatus.Error).json({})
    }
    // and so on...
		res.status(ResponseStatus.Success).json({});
})
*/