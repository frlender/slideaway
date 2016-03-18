var app = angular.module('chart', ['indexCtrl']);

// workaround to manipulate $scope in tagTable control from searchBox
// var g= {};
// g.query = {};
// g.query.pert = {};
// g.query.pert.items = [];
// g.query.pert.idx = [];
// g.query.cell = {};
// g.query.cell.items = [];
// g.query.cell.idx = [];
var herald = {};


var indexCtrl = angular.module('indexCtrl',[]);
indexCtrl.controller('expand',['$scope',function($scope){
	$scope.signalLast = function(item){
		if(item.last)
				$(herald).trigger("lastItem");
	};
	$scope.log = function(cc){console.log(cc)};
	// $scope.data = [{'title':'abc def','items':[{'title':'b'},{'title':'c','last':true}]}];
	$scope.data = [
		{'title':"By Assay",
		 'desc':'',
		 'items':[
		 	{'title':'Transcriptomics',
		 	 'desc':'',
		 	 'items':[
		 	 	{'title':'L1000','desc':'','items':[]},
		 	 	{'title':'RNA-seq','desc':'','items':[]},
		 	 ]},
		 	 {'title':'Epigenomics',
		 	 'desc':'',
		 	 'items':[
		 	 	{'title':'GCP','desc':'','items':[]},
		 	 	{'title':'ATAC-seq','desc':'','items':[]},
		 	 ]},
		 	 {'title':'Proteomics',
		 	 'desc':'',
		 	 'items':[
		 	 	{'title':'GCP','desc':'','items':[]},
		 	 	{'title':'P100','desc':'','items':[]},
		 	 	{'title':'SWATH-MS','desc':'','items':[]},
		 	 	{'title':'Mass-Spec (Sinai)','desc':'','items':[]},
		 	 	{'title':'Mass-Spec (Harvard)','desc':'','items':[]},
		 	 	{'title':'RPPA','desc':'','items':[]},
		 	 ]},
		 	  {'title':'Imaging',
		 	 'desc':'',
		 	 'items':[
		 	 	{'title':'MEMA','desc':'','items':[]},
		 	 	{'title':'Viability','desc':'','items':[]},
		 	 	{'title':'Immunofluorescence','desc':'','items':[]},
		 	 	{'title':'Neurolincs (Imaging)','desc':'','items':[]},
		 	 ]},
		 	  {'title':'KinomeScan',
		 	 'desc':'',
		 	 'items':[
		 	 	{'title':'KinomeScan','desc':'','items':[]}
		 	 ]}
		 ]
		},
		{'title':"By Center",
		 'desc':'',
		 'style':"'header'",
		 'items':[
		 	{'title':'Broad Transcriptomics',
		 	 'desc':'',
		 	 'items':[
		 	 	{'title':'L1000','desc':'','items':[]}
		 	 ]},
		 	 {'title':'Broad Proteomics',
		 	 'desc':'',
		 	 'items':[
		 	 	{'title':'P100','desc':'','items':[]},
		 	 	{'title':'GCP','desc':'','items':[]},
		 	 ]},
		 	 {'title':'HMS LINCS',
		 	 'desc':'',
		 	 'items':[
		 	 	{'title':'Immunofluorescence','desc':'','items':[]},
		 	 	{'title':'Viability','desc':'','items':[]},
		 	 	{'title':'KinomeScan','desc':'','items':[]},
		 	 	{'title':'Proteomics','desc':'','items':[]}
		 	 ]},
		 	  {'title':'MEP LINCS',
		 	 'desc':'',
		 	 'items':[
		 	 	{'title':'MEMA','desc':'','items':[]},
		 	 	{'title':'RPPA','desc':'','items':[]},
		 	 ]},
		 	 {'title':'NeuroLINCS',
		 	 'desc':'',
		 	 'items':[
		 	 	{'title':'ATAC-seq','desc':'','items':[]},
		 	 	{'title':'RNA-seq','desc':'','items':[]},
		 	 	{'title':'SWATH-MS','desc':'','items':[]},
		 	 	{'title':'Imaging','desc':'','items':[]}		 	 
		 	 ]},
		 	 {'title':'DToxS',
		 	 'desc':'',
		 	 'items':[
		 	 	{'title':'RNA-seq','desc':'','items':[]},
		 	 	{'title':'Proteomics','desc':'','items':[],'last':true},
		 	 ]}
		 ]
		}
	]
}]);