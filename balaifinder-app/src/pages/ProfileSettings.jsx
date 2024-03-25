export default function Profile(){
    return(
        <div>
            <section class="section-padding bg-cover bg-center bg-fixed">
            <div class="container mx-auto py-8">
                <h2 class="font-lato text-3xl text-center font-extrabold text-white"> Sign up to start a free trial account </h2>
                <form class="mt-6">
                <div class="grid grid-cols-8 gap-4">
                    <div class="col-start-2 col-end-5">
                    <div class="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                        First Name
                        </label>
                        <input
                        class="border rounded w-full py-3 px-4 text-grey leading-5"
                        id="fname" type="text" placeholder="First Name*" />
                    </div>
                    <div class="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                        Last Name
                        </label>
                        <input
                        class="border rounded w-full py-3 px-4 text-grey leading-5 focus:outline-none focus:shadow-outline"
                        id="lname" type="text" placeholder="Last Name*" />
                    </div>
                    <div class="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Email
                        </label>
                        <input
                        class="border rounded w-full py-3 px-4 text-grey leading-5 focus:outline-none focus:shadow-outline"
                        id="email" type="email" placeholder="Email*" />
                    </div>
                    <div class="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Birthdate
                        </label>
                        <input
                        class="border rounded w-full py-3 px-4 text-grey leading-5 focus:outline-none focus:shadow-outline"
                        id="phone" type="date" placeholder="Birthdate*" />
                    </div>
                    <div class="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                        Gender
                        </label>
                        <input
                        class="border rounded w-full py-3 px-4 text-grey leading-5 focus:outline-none focus:shadow-outline"
                        id="job" type="text" placeholder="Gender" />
                    </div>
                    </div>
                    <div class="col-start-5 col-end-8">
                    <div class="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Resedential Address
                        </label>
                        <input     
                        class="border rounded w-full py-3 px-4 text-grey leading-5 focus:outline-none focus:shadow-outline"
                        id="url" type="url" placeholder="Resedential Address" />
                    </div>
                    <div class="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                       Region
                        </label>
                        <input
                        class="border rounded w-full py-3 px-4 text-grey leading-5 focus:outline-none focus:shadow-outline"
                        id="address" type="text" placeholder="Region" />
                    </div>
                    <div class="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Province
                        </label>
                        <input
                        class="border rounded w-full py-3 px-4 text-grey leading-5 focus:outline-none focus:shadow-outline"
                        id="address" type="text" placeholder="Province" />
                    </div>
                    <div class="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Municipality
                        </label>
                        <input
                        class="border rounded w-full py-3 px-4 text-grey leading-5 focus:outline-none focus:shadow-outline"
                        id="city" type="text" placeholder="Municipality" />
                    </div>
                    <div class="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Zip Code
                        </label>
                        <input
                        class="border rounded w-full py-3 px-4 text-grey leading-5 focus:outline-none focus:shadow-outline"
                        id="pin" type="number" placeholder="Zip Code" />
                    </div>
                    </div>
                </div>
                <div class="grid grid-cols-8">
                    <div class="col-start-2 col-end-8">
                    <button class="font-lato bg-sky-700 border border-primary text-white text-h4 py-3 px-3.5 rounded-lg  w-full lg:mt-8 mt-4">Edit
                    </button>
                    </div>
                </div>
                </form>
            </div>
            </section> 
        </div>
    )
}
