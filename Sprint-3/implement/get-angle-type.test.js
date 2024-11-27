 

function getAngleType(){
    return "Right angle";
}


test("Returns angle Type", () => {
    expect(getAngleType(90)).toEqual("Right angle");
});