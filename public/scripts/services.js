var services = angular.module('services', [])
services.factory('Pagination',function(){
	// pagination used for popover.
	return function Pagination(perPageCount){
		this.perPageCount = perPageCount;
		this.limitLower = 0;
	    this.limitUpper = perPageCount;
		this.matchedSize = 0;

		var self = this;
		this.previous = function(){
			if(self.limitLower>0){
				self.limitLower -= self.perPageCount;
				self.limitUpper -= self.perPageCount;
			}
		}

		this.next = function(){
			if(self.limitUpper<self.matchedSize){
				self.limitLower += self.perPageCount;
				self.limitUpper += self.perPageCount;
			}
		}

		this.limit = function(val,idx,arr){
			if(self.matchedSize!=arr.length){
				self.limitLower = 0;
				self.limitUpper = self.perPageCount;
			}
			self.matchedSize = arr.length;
			return idx>=self.limitLower&&idx<self.limitUpper;
		};

	}
});
