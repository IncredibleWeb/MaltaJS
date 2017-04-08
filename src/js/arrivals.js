import Knockout from 'knockout';

class ArrivalViewModel {
    constructor() {
        this.title = '';
        this.status = '';
        this.time = '';
    }
};

class Service {
    // retrieves all arrivals from the API
    get() {
        return new Promise(function(resolve, reject) {
            let request = new XMLHttpRequest();
            request.open('GET', './api/data.json');

            request.onload = function() {
                // success
                if (request.status === 200) {
                    // resolve the promise with the parsed response text (assumes JSON)
                    resolve(JSON.parse(request.response));
                } else {
                    // error retrieving file
                    reject(Error(request.statusText));
                }
            };

            request.onerror = function() {
                // network errors
                reject(Error('Network Error'));
            };

            request.send();
        });
    };
};

class Adapter {
    toArrivalViewModel(data) {
        if (data) {
            let vm = new ArrivalViewModel();
            vm.title = data.title;
            vm.status = data.status;
            vm.time = data.time;
            return vm;
        }
        return null;
    };

    toArrivalViewModels(data) {
        if (data && data.length > 0) {
            return data.map((item) => {
                return this.toArrivalViewModel(item);
            });
        }
        return [];
    };
};

export default class {

    constructor() {
        // initialize the services and adapters
        this.apiService = new Service();
        this.adapter = new Adapter();
    }

    // retrieve all the arrivals from the API
    get() {
        let self = this;
        // show loading status
        var element = document.getElementById('arrivals');
        element.classList.add('loading');
        // retrieve from api
        self.apiService.get().then(function(response) {
            // adapt to view model
            return self.adapter.toArrivalViewModels(response);
        }).then(function(response) {
            // check if bindings have already been applied
            if (!Knockout.dataFor(element)) {
                // bind to the UI
                Knockout.applyBindings(response, element);
            }
            element.classList.remove('loading');
        });
    }
}
