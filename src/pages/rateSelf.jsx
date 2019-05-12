import React, { Component } from 'react';
import '../css/style.css'
import 'bootstrap/dist/css/bootstrap.css'

export default class rateself extends Component {
	constructor(props){
		super(props);
		this.state={
			rate:[]
		}
	}
	render() {
	return (
		<div>
			<div class='profiles'> 
		<div class="container">
			<div class="register">
					<form> 
						<div class="register-top-grid">
							<h3>Advantages</h3>
							<p>What kind of person do you think you are? (5 is very consent, 0 is not consent)</p>
							<div>
								<span>You are a romantic person.</span>
								<div class='span1'>
									<select class="dropdown" tabindex="10" data-settings='{"wrapperClass":"metro1"}' >
										<option value="0">0</option>	
										<option value="1">1</option>
										<option value="2">2</option>
										<option value="3">3</option>
										<option value="4">4</option>
										<option value="5">5</option>
									</select>
								</div>
							</div>
							<div>
								<span>You are a serious person.</span>
								<div class='span1'>
									<select class="dropdown" tabindex="10" data-settings='{"wrapperClass":"metro1"}'>
										<option value="0">0</option>	
										<option value="1">1</option>
										<option value="2">2</option>
										<option value="3">3</option>
										<option value="4">4</option>
										<option value="5">5</option>
									</select>
								</div>
							</div>
							<div>
								<span>You are a sexy person.</span>
								<div class='span1'>
									<select class="dropdown" tabindex="10" data-settings='{"wrapperClass":"metro1"}'>
										<option value="0">0</option>	
										<option value="1">1</option>
										<option value="2">2</option>
										<option value="3">3</option>
										<option value="4">4</option>
										<option value="5">5</option>
									</select>
								</div>
							</div>
							<div>
								<span>You are a generous person.</span>
								<div class='span1'>
									<select class="dropdown" tabindex="10" data-settings='{"wrapperClass":"metro1"}'>
										<option value="0">0</option>	
										<option value="1">1</option>
										<option value="2">2</option>
										<option value="3">3</option>
										<option value="4">4</option>
										<option value="5">5</option>
									</select>
								</div>
							</div>
						</div>
						<div class="register-bottom-grid">
							<h3>Disadvantages</h3>
							<p>What kind of person do you think you are not? (5 is very consent, 0 is not consent)</p>
							<div>
								<span>You are a greed person.</span>
								<div class='span1'>
								<select class="dropdown" tabindex="10" data-settings='{"wrapperClass":"metro1"}'>
									<option value="0">0</option>	
									<option value="1">1</option>
									<option value="2">2</option>
									<option value="3">3</option>
									<option value="4">4</option>
									<option value="5">5</option>
								</select>
							</div>
							</div>
							<div>
								<span>You are a grumpy person.</span>
								<div class='span1'>
									<select class="dropdown" tabindex="10" data-settings='{"wrapperClass":"metro1"}'>
										<option value="0">0</option>	
										<option value="1">1</option>
										<option value="2">2</option>
										<option value="3">3</option>
										<option value="4">4</option>
										<option value="5">5</option>
									</select>
								</div>
							</div>
							<div class="clearfix"> </div>
						</div>
					</form>
					<div class="clearfix"> </div>
					<div class="register-but">
						<a class="acount-btn" href="/whoami">Submit</a>
					</div>
				</div>
			</div>
		</div></div>
	);
	}
}
