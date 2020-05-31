import React from 'react';
import './adminDel.css';

export default class AdminDeletion extends React.Component {

    cencelBtn=()=>{
        document.getElementById('UpdationForm').style.display='none'
    }
    showUpdation=()=>{
        document.getElementById('UpdationForm').style.display='block';
        document.getElementById('upadtionShowBtn').style.display='none';
    }
    windowCloser=()=>{
        document.getElementById('UpdationForm').style.display='none';
        document.getElementById('upadtionShowBtn').style.display='';
    }
    render() {
        return <>
           
            {/* form code starts here !! */}

            <button onClick={this.showUpdation} className='updationButtons' id='upadtionShowBtn'>Update</button>
            <div id='UpdationForm'>
            <span onClick={this.windowCloser} className="updationClose" title="Close Modal">&times;</span>
                <form className='updationModalContent'>
                    <div className='updationContainer'>
                        <h1 className='updationFormText'>Update</h1>
                        <p  className='updationFormText'>The Product Information</p>
                        <hr id='updationHorizontalLine' />
                        <label for="email"  className='updationFormText'><b>Orignal Price</b></label>
      <input type="text" placeholder="Enter Email" name="email" required   className='adminUpdationInputFeilds'/>

      <label for="psw"  className='updationFormText'><b>Discount Price</b></label>
      <input type="text" placeholder="Enter Password" name="psw" required className='adminUpdationInputFeilds'/>

      
      <label for="psw"  className='updationFormText'><b>Validity From Now To</b></label>
      <input type="date" placeholder="Enter Password" name="psw" required className='adminUpdationInputFeilds'/>

      <label for="psw-repeat"  className='updationFormText'><b>Repeat Password</b></label>
      <input type="text" placeholder="Repeat Password" name="psw-repeat" required className='adminUpdationInputFeilds'/>
      
        
        <button type="submit" className="updationButtons" id='updateAlone'>Update</button>
    
                    </div>

                </form>

            </div>



            {/* All Picture div's are here */}

            <div>
                <h1 id='adminDeletionh1'>Hello Admin! Here You Can Delete What Ever You Want!</h1>
                <div className="adminDelCards">
                    <div className="adminDelCard">ONE</div>
                    <div className="adminDelCard">TWO</div>
                    <div className="adminDelCard">THREE</div>
                    <div className="adminDelCard">FOUR</div>
                    <div className="adminDelCard">FIVE</div>
                    <div className="adminDelCard">SIX</div>
                    <div className="adminDelCard">SEVEN</div>
                    <div className="adminDelCard">EIGHT</div>
                    <div className="adminDelCard">NINE</div>
                </div>
            </div>


        </>
    }
}