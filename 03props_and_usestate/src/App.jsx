import Button from "./components/Button";
import Card from "./components/Card";
import Card2 from "./components/Card2";
// import Card3 from "./components/Card3"

function App() {
    return (
        <>
            <div className="flex bg-gray-600 items-center justify-center gap-6 h-screen">
                {/* <div className="flex"> */}
                    <Card
                        title={"Card2"}
                        description={"This is my card 2"}
                        image={
                            "https://images.unsplash.com/photo-1760288256101-bb930c69bb61?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=600"
                        }
                    />
                    <Card
                        title={"Card1"}
                        description={"This is my card 1"}
                        image={
                            "https://images.unsplash.com/photo-1760288256101-bb930c69bb61?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=600"
                        }
                    />


                    <Card2
                        title={"card22"}
                        decription={"This is desc...."}
                        image={
                            "https://images.unsplash.com/photo-1760288256101-bb930c69bb61?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=600"
                        }
                    />


                    {/* <Button title={"Btn1"} /> */}
                    <Button>
                      Button
                    </Button>
                {/* </div> */}
            </div>
        </>
    );
}

export default App;
