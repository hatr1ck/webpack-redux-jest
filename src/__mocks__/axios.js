let get = function(url){
	return Promise.resolve({
      status: 'success',
      data: {data:{avatar:'TestAva'}},
    })
}
exports.get = get;