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
	$scope.descs = {
		'L1000':'A gene expression profiling assay based on the direct measurement of a reduced representation of the transcriptome of 1000 genes and computational inference of the rest genes from a linear model.',
		'RNA-seq':'A gene expression assay that uses next-generation sequencing (NGS) to reveal the presence and quantity of RNA in a biological sample at a given moment in time.',
		'GCP':'Global chromatin profiling is a mass spectrometry-based assay to identify and quantify post-translational modifications on histone proteins from bulk chromatin.',
		'ATAC-seq':'An assay used in molecular biology to study chromatin accessibility. It aims to identify accessible DNA regions, equivalent to DNase I hypersensitive sites.',
		'P100':'A targeted phosphoproteomic assay based on the direct measurement of a reduced representation of the phosphoprofiling of 96 phosphopeptide probes.',
		'SWATH-MS':'A data independent acquisition (DIA) method which aims to complement traditional mass spectrometry-based proteomics techniques such as shotgun and SRM methods. In essence, it allows a complete and permanent recording of all fragment ions of the detectable peptide precursors present in a biological sample.',
		'Mass-Spec (Sinai)':'An analytical technique that sorts ions based on their mass.',
		'Mass-Spec (Harvard)':'An analytical technique that sorts ions based on their mass.',
		'RPPA':'Reverse phase protein array (RPPA) is a high-throughput antibody-based technique developed for Functional Proteomics studies to evaluate protein activities in signaling networks.',
		'MEMA':'An assay for cell-based functional screening of interactions with combinatorial microenvironments.',
		'Viability':'An assay to determine the ability of cells to maintain or recover viability upon drug treatment.',
		'Immunofluorescence': 'A technique that uses the specificity of antibodies to their antigen to target fluorescent dyes to specific biomolecule targets within a cell, and therefore allows visualisation of the distribution of the target molecule through the sample.',
		'Neurolincs (Imaging)':'An assay to monitor cell survival in control, ALS, and SMA iMNs. iMNs will be transfected with a fluorescence reporter and imaged daily for 10 days.',
		'KinomeScan':'An assay to measure interactions of kinase inhibitors with kinases.'
	}
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
		 	  {'title':'Binding Assay',
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
		 	{'title':'Connectivity Map',
		 	 'img':{
		 	 	'src':'T.png',
		 	 	'height':'29px'
		 	 },
		 	 'desc':'',
		 	 'items':[
		 	 	{'title':'L1000','desc':'','items':[]}
		 	 ]},
		 	 {'title':'LINCS PCCSE',
		 	 'img':{
		 	 	'src':'P.png',
		 	 	'height':'27px'
		 	 },
		 	 'desc':'',
		 	 'items':[
		 	 	{'title':'P100','desc':'','items':[]},
		 	 	{'title':'GCP','desc':'','items':[]},
		 	 ]},
		 	 {'title':'HMS LINCS',
		 	 'desc':'',
		 	 'img':{
		 	 	'src':'H.png',
		 	 	'height':'30px'
		 	 },
		 	 'items':[
		 	 	{'title':'Immunofluorescence','desc':'','items':[]},
		 	 	{'title':'Viability','desc':'','items':[]},
		 	 	{'title':'KinomeScan','desc':'','items':[]},
		 	 	{'title':'Proteomics','desc':'','items':[]}
		 	 ]},
		 	  {'title':'MEP LINCS',
		 	  'img':{
		 	 	'src':'M.png',
		 	 	'height':'28px'
		 	 },
		 	 'desc':'',
		 	 'items':[
		 	 	{'title':'MEMA','desc':'','items':[]},
		 	 	{'title':'RPPA','desc':'','items':[]},
		 	 ]},
		 	 {'title':'NeuroLINCS',
		 	'img':{
		 	 	'src':'N.png',
		 	 	'height':'15px'
		 	 },
		 	 'desc':'',
		 	 'items':[
		 	 	{'title':'ATAC-seq','desc':'','items':[]},
		 	 	{'title':'RNA-seq','desc':'','items':[]},
		 	 	{'title':'SWATH-MS','desc':'','items':[]},
		 	 	{'title':'Imaging','desc':'','items':[]}		 	 
		 	 ]},
		 	 {'title':'DToxS',
		 	 'img':{
		 	 	'src':'D.png',
		 	 	'height':'29px'
		 	 },
		 	 'desc':'',
		 	 'items':[
		 	 	{'title':'RNA-seq','desc':'','items':[]},
		 	 	{'title':'Proteomics','desc':'','items':[],'last':true},
		 	 ]}
		 ]
		}
	]
}]);