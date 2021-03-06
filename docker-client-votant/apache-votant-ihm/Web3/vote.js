/**
 * 
 */
/*
     * Web 3 credentials and connection
     */
    var web3;
    var password = "";
    var accounts_index;
    if (typeof web3 !== 'undefined') {
        web3 = new Web3(web3.currentProvider);
    } else {
        // set the provider you want from Web3.providers
        web3 = new Web3(new Web3.providers.HttpProvider("http://192.168.99.100:8545"));
    }

    // Anonymous Voting Contract
    var abi = [ { "constant": true, "inputs": [ { "name": "", "type": "address" } ], "name": "eligible", "outputs": [ { "name": "", "type": "bool", "value": false } ], "payable": false, "type": "function" }, { "constant": false, "inputs": [ { "name": "xG", "type": "uint256[2]" }, { "name": "vG", "type": "uint256[3]" }, { "name": "r", "type": "uint256" } ], "name": "register", "outputs": [ { "name": "_successful", "type": "bool" }, { "name": "_error", "type": "string" } ], "payable": true, "type": "function" }, { "constant": false, "inputs": [], "name": "computeTally", "outputs": [], "payable": false, "type": "function" }, { "constant": true, "inputs": [ { "name": "", "type": "address" } ], "name": "addressid", "outputs": [ { "name": "", "type": "uint256", "value": "0" } ], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "totaleligible", "outputs": [ { "name": "", "type": "uint256", "value": "0" } ], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "endSignupPhase", "outputs": [ { "name": "", "type": "uint256", "value": "0" } ], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "question", "outputs": [ { "name": "", "type": "string", "value": "No question set" } ], "payable": false, "type": "function" }, { "constant": false, "inputs": [ { "name": "addr", "type": "address[]" } ], "name": "setEligible", "outputs": [], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "finishSignupPhase", "outputs": [ { "name": "", "type": "uint256", "value": "0" } ], "payable": false, "type": "function" }, { "constant": false, "inputs": [], "name": "finishRegistrationPhase", "outputs": [ { "name": "", "type": "bool" } ], "payable": false, "type": "function" }, { "constant": false, "inputs": [ { "name": "params", "type": "uint256[4]" }, { "name": "y", "type": "uint256[2]" }, { "name": "a1", "type": "uint256[2]" }, { "name": "b1", "type": "uint256[2]" }, { "name": "a2", "type": "uint256[2]" }, { "name": "b2", "type": "uint256[2]" } ], "name": "submitVote", "outputs": [ { "name": "", "type": "bool" } ], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "gap", "outputs": [ { "name": "", "type": "uint256", "value": "0" } ], "payable": false, "type": "function" }, { "constant": true, "inputs": [ { "name": "", "type": "address" } ], "name": "votecast", "outputs": [ { "name": "", "type": "bool", "value": false } ], "payable": false, "type": "function" }, { "constant": false, "inputs": [], "name": "deadlinePassed", "outputs": [ { "name": "", "type": "bool" } ], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "totalvoted", "outputs": [ { "name": "", "type": "uint256", "value": "0" } ], "payable": false, "type": "function" }, { "constant": false, "inputs": [ { "name": "params", "type": "uint256[4]" }, { "name": "y", "type": "uint256[2]" }, { "name": "a1", "type": "uint256[2]" }, { "name": "b1", "type": "uint256[2]" }, { "name": "a2", "type": "uint256[2]" }, { "name": "b2", "type": "uint256[2]" } ], "name": "verify1outof2ZKP", "outputs": [ { "name": "", "type": "bool" } ], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "owner", "outputs": [ { "name": "", "type": "address", "value": "0x7a4e839863f5862352efd06ab89af8ec72a9e7a5" } ], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "endVotingPhase", "outputs": [ { "name": "", "type": "uint256", "value": "0" } ], "payable": false, "type": "function" }, { "constant": true, "inputs": [ { "name": "", "type": "address" } ], "name": "registered", "outputs": [ { "name": "", "type": "bool", "value": false } ], "payable": false, "type": "function" }, { "constant": true, "inputs": [ { "name": "x", "type": "uint256" }, { "name": "_yG", "type": "uint256[2]" }, { "name": "_voteCrypted", "type": "uint256[2]" } ], "name": "checkVote", "outputs": [ { "name": "temp1_bis", "type": "uint256[3]", "value": [ "0", "0", "0" ] }, { "name": "temp2_bis", "type": "uint256[3]", "value": [ "0", "0", "0" ] }, { "name": "temp4", "type": "uint256", "value": "0" } ], "payable": false, "type": "function" }, { "constant": true, "inputs": [ { "name": "", "type": "address" } ], "name": "refunds", "outputs": [ { "name": "", "type": "uint256", "value": "0" } ], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "state", "outputs": [ { "name": "", "type": "uint8", "value": "0" } ], "payable": false, "type": "function" }, { "constant": true, "inputs": [ { "name": "", "type": "uint256" } ], "name": "finaltally", "outputs": [ { "name": "", "type": "uint256", "value": "0" } ], "payable": false, "type": "function" }, { "constant": true, "inputs": [ { "name": "_address", "type": "address" } ], "name": "getVoter", "outputs": [ { "name": "_registeredkey", "type": "uint256[2]", "value": [ "0", "0" ] }, { "name": "_reconstructedkey", "type": "uint256[2]", "value": [ "0", "0" ] }, { "name": "_vote", "type": "uint256[2]", "value": [ "0", "0" ] } ], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "totalregistered", "outputs": [ { "name": "", "type": "uint256", "value": "0" } ], "payable": false, "type": "function" }, { "constant": false, "inputs": [ { "name": "_question", "type": "string" }, { "name": "_finishSignupPhase", "type": "uint256" }, { "name": "_endSignupPhase", "type": "uint256" }, { "name": "_endVotingPhase", "type": "uint256" } ], "name": "beginSignUp", "outputs": [ { "name": "", "type": "bool" } ], "payable": true, "type": "function" }, { "constant": true, "inputs": [ { "name": "", "type": "uint256" } ], "name": "voters", "outputs": [ { "name": "addr", "type": "address", "value": "0x0000000000000000000000000000000000000000" } ], "payable": false, "type": "function" }, { "constant": false, "inputs": [], "name": "forceCancelElection", "outputs": [], "payable": false, "type": "function" }, { "constant": true, "inputs": [ { "name": "", "type": "uint256" } ], "name": "addresses", "outputs": [ { "name": "", "type": "address", "value": "0x" } ], "payable": false, "type": "function" }, { "constant": false, "inputs": [ { "name": "newOwner", "type": "address" } ], "name": "transferOwnership", "outputs": [], "payable": false, "type": "function" }, { "constant": false, "inputs": [ { "name": "xG", "type": "uint256[2]" }, { "name": "r", "type": "uint256" }, { "name": "vG", "type": "uint256[3]" } ], "name": "verifyZKP", "outputs": [ { "name": "", "type": "bool" } ], "payable": false, "type": "function" }, { "inputs": [ { "name": "_gap", "type": "uint256", "index": 0, "typeShort": "uint", "bits": "256", "displayName": "&thinsp;<span class=\"punctuation\">_</span>&thinsp;gap", "template": "elements_input_uint", "value": "0" } ], "payable": false, "type": "constructor" } ];
    var anonymousvoting = web3.eth.contract(abi);
    var anonymousvotingAddr = anonymousvoting.at("0x565362ec09A0e55C041dFDfCb00A93A989D89dda");

    // Local Crypto Contract
    var abi_crypto = [{"constant":false,"inputs":[{"name":"params","type":"uint256[4]"},{"name":"xG","type":"uint256[2]"},{"name":"yG","type":"uint256[2]"},{"name":"y","type":"uint256[2]"},{"name":"a1","type":"uint256[2]"},{"name":"b1","type":"uint256[2]"},{"name":"a2","type":"uint256[2]"},{"name":"b2","type":"uint256[2]"}],"name":"commitToVote","outputs":[{"name":"","type":"bytes32"}],"type":"function"},{"constant":false,"inputs":[{"name":"xG","type":"uint256[2]"},{"name":"yG","type":"uint256[2]"},{"name":"w","type":"uint256"},{"name":"r2","type":"uint256"},{"name":"d2","type":"uint256"},{"name":"x","type":"uint256"}],"name":"create1outof2ZKPNoVote","outputs":[{"name":"res","type":"uint256[10]"},{"name":"res2","type":"uint256[4]"}],"type":"function"},{"constant":false,"inputs":[{"name":"a","type":"uint256"},{"name":"b","type":"uint256"}],"name":"submod","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[{"name":"x","type":"uint256"},{"name":"v","type":"uint256"},{"name":"xG","type":"uint256[2]"}],"name":"createZKP","outputs":[{"name":"res","type":"uint256[4]"}],"type":"function"},{"constant":false,"inputs":[{"name":"params","type":"uint256[4]"},{"name":"xG","type":"uint256[2]"},{"name":"yG","type":"uint256[2]"},{"name":"y","type":"uint256[2]"},{"name":"a1","type":"uint256[2]"},{"name":"b1","type":"uint256[2]"},{"name":"a2","type":"uint256[2]"},{"name":"b2","type":"uint256[2]"}],"name":"verify1outof2ZKP","outputs":[{"name":"","type":"bool"}],"type":"function"},{"constant":false,"inputs":[{"name":"xG","type":"uint256[2]"},{"name":"yG","type":"uint256[2]"},{"name":"w","type":"uint256"},{"name":"r1","type":"uint256"},{"name":"d1","type":"uint256"},{"name":"x","type":"uint256"}],"name":"create1outof2ZKPYesVote","outputs":[{"name":"res","type":"uint256[10]"},{"name":"res2","type":"uint256[4]"}],"type":"function"},{"constant":false,"inputs":[{"name":"xG","type":"uint256[2]"},{"name":"r","type":"uint256"},{"name":"vG","type":"uint256[3]"}],"name":"verifyZKP","outputs":[{"name":"","type":"bool"}],"type":"function"},{"inputs":[],"type":"constructor"}];
    var crypto_contract = web3.eth.contract(abi_crypto);
    var cryptoAddr = crypto_contract.at("0x1a0De95A66970AFd36B70FbbdD7c2EC92a060007");
	
	function openNewPasswordBox() {
		
		var selectbox2 = "<br><p>Création d'un compte Ethereum</p><br><p>Veuillez rentrer un mot de passe :</p><br><input type='password' id='passwordf' value='ilikelittlepaddy' name='fname' class='action-text'> <input id='done2' class='hidden next' type='button'> <input type='button' class='action-button'  value = 'Créer' onclick='createAccountEthereum();'>";
        document.getElementById('dropdown2').innerHTML = selectbox2;
		
	}
	
	function createAccountEthereum() {
		var _password = document.getElementById('passwordf').value;
        document.getElementById('passwordf').value = "";
        var addressAccount = web3.personal.newAccount(_password)
		alert("L'adresse de vote compte est : " + addressAccount +" . Veuillez bien la noter.")
        
        var box = "<button onclick='openNewPasswordBox()' class='action-button'>Création</button><button onclick='importEthereumAccount()' class='action-button'>Import</button>"
        document.getElementById('dropdown2').innerHTML = box;
	}
	
	/** V2 : 
    // Fetch all the Ethereum addresses...
    function selectBox2() {

        // Only run if user has not yet chosen an Ethereum address.
        if (!addressChosen) {
            var listAddr = "";
            // Let user select one of their Ethereum addresses
            for (var i = 0; i < web3.eth.accounts.length; i++) {
                var tempaddr = web3.eth.accounts[i];
                listAddr = listAddr + '<option value="' + i + '">' + tempaddr + '</option>';
            }

            var selectbox = "<p>Select your ethereum account:</p><select id='addrs' class='action-list'>" + listAddr + "</select> <br><br><p>Password:</p> <input type='password' id='passwordf' value='ilikelittlepaddy' name='fname' class='action-text'> <input id='done2' class='hidden next' type='button'> <input type='button' class='action-button'  value = 'Login' onclick='unlock();'>";
            document.getElementById('ethereumListAccount').innerHTML = selectbox;
        }
    }
    */

    // Fetch all the Ethereum addresses...
    function selectBox() {

        // Only run if user has not yet chosen an Ethereum address.
        if (!addressChosen) {
            var listEligible = "";
            var foundEligible = false;
            // Let user select one of their Ethereum addresses
            for (var i = 0; i < web3.eth.accounts.length; i++) {
                var tempaddr = web3.eth.accounts[i];
                if (anonymousvotingAddr.eligible(tempaddr)) {
                    foundEligible = true;
                    listEligible = listEligible + '<option value="' + i + '">' + tempaddr + '</option>';
                }
            }

            // Only create a drop-down box if we have found an address that is eligible to vote!
            if (foundEligible) {
                var selectbox = "<h2>Eligible Ethereum Accounts</h2><br><p>Address:</p><select id='addrs' class='action-list'>" + listEligible + "</select> <br><br><p>Password:</p> <input type='password' id='passwordf' value='ilikelittlepaddy' name='fname' class='action-text'> <input id='done2' class='hidden next' type='button'> <input type='button' class='action-button'  value = 'Login' onclick='unlock();'>";
                document.getElementById('dropdown').innerHTML = selectbox;
            }


        }
    }

    function unlock() {
        var _addr = $('#addrs').find(":selected").text();
        var _password = document.getElementById('passwordf').value;
        document.getElementById('passwordf').value = "";
        
        try {
	        web3.personal.unlockAccount(_addr, _password);
	        addressChosen = true;
	        addr = _addr;
	        password = _password;
	        accounts_index = $("#addrs").val();
	        controlTransition("#unlockfs", null);
	        //V2 : controlTransition("#registerTestfs", null);
	        //document.getElementById('generalStatus').innerHTML = "You have selected the address " + addr;
        } catch (e) {
        	alert(e);
        }
        currentState();
    }

    // Vote submits their voting key.
    function register() {

        if (!uploaded) {
            alert("Please upload your voting codes");
        }

        if (!addressChosen) {
            alert("Please unlock your Ethereum address");
            return;
        }

        if (state != 1) {
            alert("You can only register during the SIGNUP Phase ");
            return;
        }

        if (!anonymousvotingAddr.eligible(addr)) {
            alert("Your Ethereum Account is not eligible for this vote");
            return;
        }

        // We prove knowledge of the voting key
        var single_zkp = cryptoAddr.createZKP.call(x, v, xG, {
            from: web3.eth.accounts[accounts_index]
        });
        var vG = [single_zkp[1], single_zkp[2], single_zkp[3]];

        web3.personal.unlockAccount(addr, password);

        // Lets make sure the ZKP is valid!
        var verifyres = cryptoAddr.verifyZKP.call(xG, single_zkp[0], vG, {
            from: web3.eth.accounts[accounts_index]
        });

        if (!verifyres) {
            alert("Problem with voting codes");
            return;
        }

        var res = anonymousvotingAddr.register.call(xG, vG, single_zkp[0], {
                from: web3.eth.accounts[accounts_index],
                value: 0
            });

        // Submit voting key to the network
        if (res) {
            anonymousvotingAddr.register.sendTransaction(xG, vG, single_zkp[0], {
                from: web3.eth.accounts[accounts_index],
                gas: 4200000,
                value: 0
            });

            //TODO: DUPLICATED CODE FROM CURRENTSTATE. Needs its own function.
            document.getElementById('registerbutton').setAttribute("hidden",true);
            document.getElementById("registrationprogress").removeAttribute("hidden");
            document.getElementById("submitvotingkey").removeAttribute("hidden");

        } else {
            alert("Registration failed... Problem could be your voting codes or that you have already registered");
        }
    }


    // User votes yes or no!
    function vote(choice) {

        if (!uploaded) {
            alert("Please upload your voting codes");
            return;
        }

        if (!addressChosen) {
            alert("Please unlock your Ethereum address");
            return;
        }

        // Lets make sure they are registered too...
        if (!anonymousvotingAddr.registered(addr)) {
            alert("You are not registered for this vote");
            return;
        }
            // SETUP, SIGNUP, TALLY
        if (state == 0 || state == 1 || state == 3 ) {
            alert("You can only vote during the COMMITMENT or VOTE phase");
            return;
        }

        var choice_text;

        // Get xG and yG (only way to get values from a Struct)
        var voter = anonymousvotingAddr.getVoter.call(web3.eth.accounts[accounts_index], {
            from: web3.eth.accounts[accounts_index]
        });

        var xG = [voter[0][0], voter[0][1]];
        var yG = [voter[1][0], voter[1][1]];

        if (choice == 1) {
            choice_text = "YES";
            result = cryptoAddr.create1outof2ZKPYesVote.call(xG, yG, w, r, d, x, {
                from: web3.eth.accounts[accounts_index]
            });
        } else {
            choice_text = "NO";
            result = cryptoAddr.create1outof2ZKPNoVote.call(xG, yG, w, r, d, x, {
                from: web3.eth.accounts[accounts_index]
            });
        }



        var y = [result[0][0], result[0][1]];
        var a1 = [result[0][2], result[0][3]];
        var b1 = [result[0][4], result[0][5]];
        var a2 = [result[0][6], result[0][7]];
        var b2 = [result[0][8], result[0][9]];

        var params = [result[1][0], result[1][1], result[1][2], result[1][3]];
        result = anonymousvotingAddr.verify1outof2ZKP.call(params, y, a1, b1, a2, b2, {
            from: web3.eth.accounts[accounts_index]
        });

        // Let's make sure the zero knowledge proof checked out...
        if (result) {

            var castvote = false;

            // We either send a commitment to the vote, or the vote itself!
            if (state == 2) {
                if (confirm("You are voting " + choice_text + "... You will not be able to change your vote")) {
                    castvote = true;
                }
                
                if (castvote) {
                    web3.personal.unlockAccount(addr, password);
                    result = anonymousvotingAddr.submitVote.sendTransaction(params, y, a1, b1, a2, b2, {
                        from: web3.eth.accounts[accounts_index],
                        gas: 4200000
                    });
                    document.getElementById('do_vote').innerHTML = 'Vote has been submitted... Waiting for confirmation';
                }
            }
        } else {
            alert("Vote was not computed successfully... Please check that you have uploaded the correct voting codes and unlocked the correct account");
        }
    }

    function whatIsQuestion() {
        document.getElementById('question').innerHTML = anonymousvotingAddr.question();
        document.getElementById('question3').innerHTML = anonymousvotingAddr.question();
        document.getElementById('question4').innerHTML = anonymousvotingAddr.question();    
    }

    // Create the 'Registration Screen'. Mostly here to tidy up code.
    function createRegistrationField() {

      if(!changedToRegistration) {
        document.getElementById('registerready').removeAttribute("hidden");
        var date = new Date();
        date.setTime(anonymousvotingAddr.finishSignupPhase() * 1000);
        document.getElementById('registerby').innerHTML = "<hr><br>Register your ballot before " + clockformat(date);
        date.setTime(anonymousvotingAddr.endSignupPhase() * 1000);
        changedToRegistration = true;
      }

      // Have we submited the key yet?
      if(anonymousvotingAddr.registered(addr)) {
        document.getElementById('registerbutton').setAttribute("hidden",true);
        document.getElementById("registrationprogress").removeAttribute("hidden");
        document.getElementById("submitvotingkey").removeAttribute("hidden");
      }

      document.getElementById('balance').innerHTML = web3.fromWei(web3.eth.getBalance(web3.eth.accounts[accounts_index]));

    }

    function currentState() {
		
    	
        if(!addressChosen) {
          return;
        }
        
        state = anonymousvotingAddr.state();

        whatIsQuestion();

        if (state == 0) {

        } else if (state == 1) {
            var time = anonymousvotingAddr.endSignupPhase() * 1000;
            var currentTime = new Date().getTime();
            document.getElementById('registerwait').setAttribute("hidden",true);
            if(currentTime > time) {
              document.getElementById("registerready").setAttribute("hidden", true);
              document.getElementById("resetbutton").removeAttribute("hidden");
              document.getElementById("regclock").innerHTML = clockformat(new Date(time));
              if(!anonymousvotingAddr.registered(web3.eth.accounts[accounts_index])) {
                document.getElementById("resetbutton").innerHTML = "You did not register to vote. <br> No deposit to return.";
              }
              document.getElementById('registerby').setAttribute("hidden", true);
              document.getElementById('registerrefundby').setAttribute("hidden", true);
            } else {
              if(document.getElementById("resetbutton").hasAttribute("hidden")) {
                createRegistrationField();
              }
            }

        } else if (state == 2) {

          if(!changedToVote) {
            changedToVote = true;
            controlTransition(id_current_fs, "#votefs");
          }

          var time = anonymousvotingAddr.endVotingPhase() * 1000;
          var currentTime = new Date().getTime();
          var votebytimer = new Date(time);          

          if(currentTime > time) {
            document.getElementById("do_vote").setAttribute("hidden", true);
            document.getElementById("vote_waiting").setAttribute("hidden", true);
            document.getElementById("resetbutton4").removeAttribute("hidden");
            document.getElementById("regclock4").innerHTML = clockformat(new Date(time));
            document.getElementById('voteby').setAttribute("hidden", true);

            if(!anonymousvotingAddr.votecast(web3.eth.accounts[accounts_index])) {
              document.getElementById("resetbutton4").innerHTML = "You did not cast your encrypted vote in time. <br> Your deposit will not be returned.";
            }
            return;
          }

          var date = new Date();
          date.setTime(time);

          if(anonymousvotingAddr.votecast(addr)) {
        	document.getElementById("voteby").removeAttribute("hidden");
            checkVoteCast();
            checkStatistics();
            return;
          } 


        } else if (state == 3) {
          if(!changedToTally) {
            changedToTally = true;;
            controlTransition(id_current_fs, "#tallyfs");
          }

            // Did everyone vote? Did we have voters registered?
            if((anonymousvotingAddr.totalregistered().eq(anonymousvotingAddr.totalvoted())) && !anonymousvotingAddr.totalregistered().eq(new BigNumber("0"))) {
              var yes = anonymousvotingAddr.finaltally(0);
              var total = anonymousvotingAddr.finaltally(1);
              var no = total - yes;
              document.getElementById('result').innerHTML = "Yes = " + yes + "<br> No = " + no;
            } else {
              document.getElementById('result').innerHTML = "Voting has been cancelled.";
            }

            // Decide if refund button should be displayed or not...
            if(anonymousvotingAddr.refunds(web3.eth.accounts[accounts_index]) > 0) {
              document.getElementById("refund-notvalid").setAttribute("hidden", true);
              document.getElementById("refund-valid").removeAttribute("hidden");
              document.getElementById("refund").innerHTML = web3.fromWei(anonymousvotingAddr.depositrequired());
              document.getElementById("refundclock").innerHTML = clockformat(new Date(anonymousvotingAddr.endRefundPhase() * 1000));
            } else {
              document.getElementById("refund-valid").setAttribute("hidden", true);
              document.getElementById("refund-notvalid").removeAttribute("hidden");
            }
        } else {
            //document.getElementById('state').innerHTML = "Undocumented Phase: Something went wrong... ";
            alert("Undocumented Phase: Something went wrong... ");
        }

        // checkDeadlines();
        checkVoteCast();
        checkStatistics();

    }
    
    function checkVote() {
        var voter = anonymousvotingAddr.getVoter.call(web3.eth.accounts[accounts_index], {
            from: web3.eth.accounts[accounts_index]
        });
        var yG = [voter[1][0], voter[1][1]];
        var vote = [voter[2][0], voter[2]][1];
        
    	var res = anonymousvotingAddr.checkVote.call(x,yG,vote,{
    		from: web3.eth.accounts[accounts_index]});
    	
    	var result = res[2];
    	
    	if (result.equals(0)) {
    		alert("Your vote is : NO"); 
    	} else if (result.equals(1)) {
    		alert("Your vote is : YES");
    	} else {
    		alert("Erreur !!!!!")
    	}
    	
    }

    function checkStatistics() {

      var eligible = anonymousvotingAddr.totaleligible();
      var registered = anonymousvotingAddr.totalregistered();
      var voted = anonymousvotingAddr.totalvoted();

      document.getElementById("registrationprogress").innerHTML = registered + "/" + eligible + " voters have registered.";
      document.getElementById("vote_waiting").innerHTML = voted + "/" + registered + " votes have been cast.";
    }

    function checkVoteCast() {

        // Check if key has been submitted
        if (anonymousvotingAddr.registered(addr)) {
            document.getElementById('submitvotingkey').innerHTML = "Voting key has been accepted by Ethereum";
            //Check if vote has already been cast (or if a commitment has been accepted)
            if (anonymousvotingAddr.votecast(addr)) {
                document.getElementById('do_vote').innerHTML = "Vote has been cast";
            }
        }


    }

    // Control which window opens....
    function controlTransition(currentfs, nextfs) {

      // Prevent weird loop
      if(currentfs == nextfs) {
        return;
      }
          
      // Do we know where to go next?
      if(nextfs != null) {
          nextSlide(currentfs, nextfs);
          return;
      }
      
      // Nope.. jump to latest state.
      var state = anonymousvotingAddr.state();
      
      
      if (!uploaded) {
    	  nextSlide(currentfs, "#uploadfs")
    	  return;
      }
      
      
      switch(state.toString("10")) {
        case "0":
            //nextSlide(currentfs, "#registerfs");
            break;
        case "1":
           nextSlide(currentfs, "#registerfs");
           break;
        case "2":
           $("#progressbar li").eq($("fieldset").index($("#registerfs"))).addClass("active");
           nextSlide(currentfs, "#votefs");
           break;
        case "3":
           $("#progressbar li").eq($("fieldset").index($("#registerfs"))).addClass("active");
           $("#progressbar li").eq($("fieldset").index($("#votefs"))).addClass("active");
           $("#progressbar li").eq($("fieldset").index($("#tallyfs"))).addClass("active");
           nextSlide(currentfs, "#tallyfs");
           break;
        default:
          break;
      }
    }

    // Easy to read clock time format.
    function clockformat(date) {
       var mins = "";

       if(date.getMinutes() < 10) {
         mins = "0" + date.getMinutes();
       } else {
         mins = date.getMinutes();
       }
       var toString = date.getHours() + ":" + mins + ", ";

       toString = toString + (date.getMonth() + 1) + "/" + date.getDate() + "/" + date.getFullYear();

       return toString;
    }
    
    whatIsQuestion();
    
    selectBox();

    var temp=false;

    //[0] = x (private key)
    //[1] = xG (public key)
    //[2] = v (random nonce for zkp)
    //[3] = w (random nonce for 1outof2 zkp)
    //[4] = r (1 or 2, random nonce for 1outof2 zkp)
    //[5] = d (1 or 2, random nonce for 1outof2 zkp)
    // Read file that contains users drawOperationGasTable

    // x & xG is the voting key
    // v is the blinding factor for single zkp
    // w,r,d is required for 1 out of 2 zkp.
    // yG is recomputed public key - we get this from Ethereum
    var x;
    var xG;
    var v;
    var w;
    var r;
    var d;
    var addr;

    /*
     * State Variables. Make sure we only do these things ONCE.
     */
    var addressChosen = false; // User has selected their Ethereum Address
    var uploaded = false; // User has uploaded their voting codes
    var checkedCommit = false; // OPTIONAL: If user has commitment and in VOTE phase. Check if YES or NO.

    var openFile = function(event) {
        var input = event.target;

        var reader = new FileReader();
        reader.onload = function() {
            var text = reader.result.split("\n");

            var row = text[0].split(",");

            // We are expecting 7 numbers...
            if (row.length == 7) {
                uploaded = true;
                x = new BigNumber(row[0]);
                xG = [new BigNumber(row[1]), new BigNumber(row[2])];
                v = new BigNumber(row[3]);
                w = new BigNumber(row[4]);
                r = new BigNumber(row[5]);
                d = new BigNumber(row[6]);
                //  alert("Upload Succesful!");
                selectBox();
                controlTransition("#uploadfs", null);
                //document.getElementById('generalStatus').innerHTML = "We have extracted your voting codes";

            } else {
                alert("Problem with uploaded file..." + row.length);
            }
        }

        reader.readAsText(input.files[0]);
    };

    var changedToRegistration = false;
    var changedToCommit = false;
    var changedToVote = false;
    var changedToTally = false;
    
    setInterval("currentState()", 5000);
    currentState();

    /* FOR THE FIELD SET STEPPING */
    var current_fs, next_fs; //fieldsets
    var id_current_fs;
    var left, opacity, scale; //fieldset properties which we will animate
    var animating; //flag to prevent quick multi-click glitches

    function nextSlide(current_id, next_id) {
        if (animating) return false;
        animating = true;

        current_fs = $(current_id);
        next_fs = $(next_id);
        id_current_fs = next_id; // Added by paddy to get string id

        //activate next step on progressbar using the index of next_fs
        $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");

        //show the next fieldset
        next_fs.show();
        //hide the current fieldset with style
        current_fs.animate({
            opacity: 0
        }, {
            step: function(now, mx) {
                //as the opacity of current_fs reduces to 0 - stored in "now"
                //1. scale current_fs down to 80%
                scale = 1 - (1 - now) * 0.2;
                //2. bring next_fs from the right(50%)
                left = (now * 50) + "%";
                //3. increase opacity of next_fs to 1 as it moves in
                opacity = 1 - now;
                current_fs.css({
                    'transform': 'scale(' + scale + ')'
                });
                next_fs.css({
                    'left': left,
                    'opacity': opacity
                });
            },
            duration: 800,
            complete: function() {
                current_fs.hide();
                animating = false;
            },
            //this comes from the custom easing plugin
            easing: 'easeInOutBack'
        });
    }

    $(".submit").click(function() {
        return false;
    });
    /* FOR THE OTHER TWEAKS */

    $("#uploadTrigger").click(function() {
        //console.log("Clicked2");
        $("#uploadFile").click();
    });

    //$("#triggerNext1").click(function() {
    //  console.log("Clicked2");
    // $("#done2").click();
    //});