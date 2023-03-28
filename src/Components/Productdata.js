
import Card from './Card'

export const Productdata = ({ count, setCount }) => {
    const cartData = [
        {
            productImage: "",
            productName: "Fancy Product",
            salesEnabler: false,
            priceEnabler: false,
            price: "$40-$80",
            ratingEnabler: true,

        },
        {
            productImage: "",
            productName: "Special item",
            salesEnabler: true,
            priceEnabler: true,
            price: "-$18.00",
            textMuted: "$20.00",
            ratingEnabler: true,

        },
        {
            productImage: "",
            productName: "Sales item",
            salesEnabler: true,
            priceEnabler: true,
            price: "-$25.00",
            textMuted: "50.00",
            ratingEnabler: true,
        },
        {
            productImage: "",
            productName: "Popular item",
            salesEnabler: false,
            priceEnabler: false,
            price: "$40.00",
            ratingEnabler: true,

        },
        {
            productImage: "",
            productName: "Sales item",
            salesEnabler: true,
            priceEnabler: true,
            price: "-$25.00",
            textMuted: "50.00",
            ratingEnabler: true,
        },
        {
            productImage: "",
            productName: "Fancy Product",
            salesEnabler: false,
            price: "$120-$280",
            textMuted: "20",
            ratingEnabler: true,  
                      
        },
        {
            productImage: "",
            productName: "Special item",
            salesEnabler: true,
            priceEnabler: true,
            price: "$-$18.00",
            textMuted: "20.00",
            ratingEnabler: true,
        },
        {
            productImage: "",
            productName: "Sales item",
            salesEnabler: false,
            price: "$40.00",
            ratingEnabler: true,

        },
    ]
    return (
        <div>
            <section className="py-5">
                <div className="container px-4 px-lg-5 mt-5">
                    <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">

                        {cartData.map((prod, idx,) => <Card
                            prod={prod}
                            idx={idx}
                            key={idx}
                            count={count}
                            setCount={setCount}
                        />)}

                    </div>
                </div>
            </section>
        </div>
    )
}
