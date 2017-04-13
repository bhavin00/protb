// (function () {
//     'use strict';

//     angular.module('myra').directive('exportTable', exportTable);

//     exportTable.$inject = [];

//     function exportTable() {
//         return {
//             // require: 'ngModel',
//             restrict: 'C',
//             link: function ($scope, elm, attr) {
//                 $scope.$on('export-pdf', function (e, d) {
//                     elm.tableExport({ type: 'pdf', escape: 'false' });
//                 });
//                 $scope.$on('export-excel', function (e, d) {
//                     elm.tableExport({ type: 'excel', escape: false });
//                 });
//                 $scope.$on('export-doc', function (e, d) {
//                     elm.tableExport({ type: 'doc', escape: false });
//                 });
//             }
//         };
//     }
// })();


// (function () {
//     //export html table to pdf, excel and doc format directive
//     var exportTable = function () {
//         var link = function ($scope, elm, attr) {
//             $scope.$on('export-pdf', function (e, d) {
//                 elm.tableExport({ type: 'pdf', escape: 'false' });
//             });
//             $scope.$on('export-excel', function (e, d) {
//                 elm.tableExport({ type: 'excel', escape: false });
//             });
//             $scope.$on('export-doc', function (e, d) {
//                 elm.tableExport({ type: 'doc', escape: false });
//             });
//         }
//         return {
//             restrict: 'C',
//             link: link
//         }
//     }
//     angular
//         .module('CustomDirectives', [])
//         .directive('exportTable', exportTable);
// })();

// angular.module('myra').factory('Excel', function ($window) {
//     var uri = 'data:application/vnd.ms-excel;base64,',
//         template = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head><body><table>{table}</table></body></html>',
//         base64 = function (s) { return $window.btoa(unescape(encodeURIComponent(s))); },
//         format = function (s, c) { return s.replace(/{(\w+)}/g, function (m, p) { return c[p]; }) };
//     return {
//         tableToExcel: function (tableId, worksheetName) {
//             var table = $(tableId),
//                 ctx = { worksheet: worksheetName, table: table.html() },
//                 href = uri + base64(format(template, ctx));
//             return href;
//         }
//     };
// });
    // .controller('MyCtrl', function (Excel, $timeout) {
    //     $scope.exportToExcel = function (tableId) { // ex: '#my-table'
    //         $scope.exportHref = Excel.tableToExcel(tableId, 'sheet name');
    //         $timeout(function () { location.href = $scope.fileData.exportHref; }, 100); // trigger download
    //     }
    // });