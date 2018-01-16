{
	// console.log(JSON.stringify(props.content, null, 2))
}

<div className="m-summary" id="js-menu">
	{
		(() => {
			const getItems = (articles) => {
				return articles.map((item, index) => {
					const distPath = props.distPath;
					const activeItem = distPath.substring(distPath.lastIndexOf('\/') + 1, distPath.length);
					const activeFlag = (item.ref.indexOf(activeItem) === 0);
					
					return (
						<li className={'item ' + (activeFlag ? 'active' : '')} key={index}>
							<a href={item.ref} className="href" >{item.title}</a>
						</li>
					);
				});
			};
			
			return props.summary.map((item, index) => {
				return (
					<div className="m-summary-block" key={index}>
						{item.title ? <div className="m-summary-title">{item.title}</div> : ''}
						<ul className="m-summary-list">{getItems(item.articles)}</ul>
					</div>
				);
			});
		})()
	}
	{/* <div className="m-summary-switch js-summaty-switch" >&#xf020;</div> */}
</div>