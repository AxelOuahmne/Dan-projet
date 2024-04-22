function Paiement() {
    return (
        <div className="container mx-auto py-8">
          <h1 className="text-3xl font-bold mb-4">Payment Page</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Article Card */}
            <div className="bg-white shadow-md rounded-lg p-6">
              <img src="https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg" alt="Article 1" className="w-full h-40 object-cover mb-4 rounded-lg" />
              <h2 className="text-xl font-bold mb-2">Article 1</h2>
              <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <div className="flex justify-between items-center mb-4">
                <span className="text-gray-700">Price: $20</span>
                <button className="px-4 py-2 bg-blue-500 text-white rounded-md">Pay Now</button>
              </div>
            </div>
    
            {/* Article Card */}
            <div className="bg-white shadow-md rounded-lg p-6">
              <img src="https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg" alt="Article 2" className="w-full h-40 object-cover mb-4 rounded-lg" />
              <h2 className="text-xl font-bold mb-2">Article 2</h2>
              <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <div className="flex justify-between items-center mb-4">
                <span className="text-gray-700">Price: $30</span>
                <button className="px-4 py-2 bg-blue-500 text-white rounded-md">Pay Now</button>
              </div>
            </div>
    
            {/* Article Card */}
            <div className="bg-white shadow-md rounded-lg p-6">
              <img src="https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg" alt="Article 3" className="w-full h-40 object-cover mb-4 rounded-lg" />
              <h2 className="text-xl font-bold mb-2">Article 3</h2>
              <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <div className="flex justify-between items-center mb-4">
                <span className="text-gray-700">Price: $40</span>
                <button className="px-4 py-2 bg-blue-500 text-white rounded-md">Pay Now</button>
              </div>
            </div>
          </div>
        </div>
      );
    }

export default Paiement
