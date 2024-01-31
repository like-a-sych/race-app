import styled from "styled-components";

const Container = styled.div`
	margin: 0 auto;
	padding: 0 15px;

	@media(min-width: 1230px) {
		max-width: 1200px;
	}
	@media(max-width:1230px) {
		max-width:100%;
	}
`

export {Container}