/**
 * File containing the strings (literal constants) used in the website.
 *
 * For horizontal spacing, use the .tab-n (where n is a natural number) classes found in style.css,
 * as seen in the strings related to the extended Booth's algorithm. Avoid using consecutive &nbsp;
 * since these clutter the text included when the user performs a selection.
 */

/* --- ALGORITHM NAMES --- */
const algoNames = [`Pencil-and-Paper Method`, `Booth's Algorithm`];

/* --- TRIVIA HEADER --- */
/* End with a period (or any other terminal punctuation mark), followed by a space. */
const pencilTriviaHeader = 'Are We There Yet? ';
const boothsTriviaHeader = 'From Small Beginnings. ';

const triviaHeaders = [pencilTriviaHeader, boothsTriviaHeader,];

/* --- TRIVIA --- */
const pencilTrivia = `Hardware implementations optimize the paper-and-pencil method by adding multiple partial products together in
    a single cycle, such as Wallace trees&nbsp;`;

const boothsTrivia = `Originally devised only to optimize signed binary multiplication, Booth's algorithm is now applied in various technologies such as face recognition&nbsp;
    <a class = "no-decor no-hover trivia" href = "https://ieeexplore.ieee.org/abstract/document/7208966" target = "_blank">
    <i class = "fa fa-external-link no-hover"></i></a>
    and digital signal processing&nbsp;
    <a class = "no-decor no-hover trivia" href = "https://www.researchgate.net/profile/Kuan-Hung-Chen-4/publication/224317087_A_Spurious-Power_Suppression_Technique_for_MultimediaDSP_Applications/links/54ed2ac70cf27fbfd772341e/A-Spurious-Power-Suppression-Technique-for-Multimedia-DSP-Applications.pdf" target = "_blank">
    <i class = "fa fa-external-link no-hover"></i></a>`;


const trivia = [pencilTrivia, boothsTrivia];

/* --- PENCIL-AND-PAPER ALGORITHM --- */
const pencilIntro = `Similar to decimal multiplication, the pencil-and-paper method involves multiplying every bit of 
    the multiplicand by each bit of the multiplier and adding the intermediate products to arrive at the final answer. 
    However, due to the smaller radix of the binary number system, computing for the intermediate products is much simpler. <br><br>`;

const pencilStepStrings = [
	"A. Represent the operands in two's complement.\n\t1. If the user enters a decimal number, it is represented using the fewest number of bits.\n\t2. If the user enters a binary number, the number of bits follows the user's input. \n\n",
	'B. If necessary, perform sign extension to make the number of bits of the operands equal.\n\n',
	"\n\nC. Multiply the multiplicand with each digit of the multiplier.\n\t1. Sign-extend the intermediate product until it has the same number of digits as the sum of the number of digits of the multiplicand and multiplier.\n\t2. Similar to decimal pencil-and-paper multiplication, skip one bit after each intermediate product.\n\t3. If the multiplier is negative, add the two's complement of the multiplicand as the last intermediate product.\n\n"
];

const pencilStepA = `<div class = "hanging-indent">
        <b>A.<span class="tab-13"></span>Represent the operands in two's complement.</b>
    </div>
    <div class = "indented hanging-indent">
        1.<span class="tab-13"></span>If the user enters a decimal number, it is represented using the fewest number of bits.
    </div>
    <div class = "indented hanging-indent">
        2.<span class="tab-13"></span>If the user enters a binary number, the number of bits follows the user's input. 
    </div>`;

const pencilStepB = `<div class = "hanging-indent">
        <b>B.<span class="tab-13"></span>If necessary, perform sign extension to make the number of bits of the operands equal.</b>
    </div>`;

const pencilStepC = `<div class = "hanging-indent">
        <b>C.<span class="tab-12"></span>Multiply the multiplicand with each digit of the multiplier.<br></b>
    </div>
    <div class = "indented hanging-indent">
        1.<span class="tab-13"></span>Sign-extend the intermediate product until it has the same number
        of digits as the sum of the number of digits of the multiplicand and multiplier.
    </div>
    <div class = "indented hanging-indent">
        2.<span class="tab-13"></span>Similar to decimal pencil-and-paper multiplication, skip one bit after each 
        intermediate product. 
    </div>
    <div class = "indented hanging-indent">
        3.<span class="tab-13"></span>If the multiplier is negative, add the two's complement of the multiplicand as 
        the last intermediate product. 
    </div>`;

const pencilAlgo = `${pencilIntro}
    ${pencilStepA}
    ${pencilStepB}
    ${pencilStepC}`;

/* --- BOOTH'S ALGORITHM --- */
const boothsIntro = `The Booth's Algorithm is a signed binary multiplication technique that was introduced by Andrew D. Booth in 1951,Using this technique, two signed binary numbers are multiplied in two's complement notation, and an encoding scheme is employed to simplify the operation and make it more efficient. <br> <br>`;

const boothsStepStrings = [
	"A. Represent the operands in two's complement.\n\t1. If the user enters a decimal number, it is represented using the fewest number of bits.\n\t2. If the user enters a binary number, the number of bits follows the user's input. \n\n",
	'B. If necessary, perform sign extension to make the number of bits of the operands equal.\n\n',
	"\n\nC. Convert the multiplier to its Booth's equivalent.\n\t1. Append 0 to the least significant bit. \n",
	'\n\n\t2. Pair and encode two bits starting at the least significant bit.\n',
	'\n\nD. Multiply using pencil-and-paper method — but ignore the extra step even if the multiplier is negative. \n   Since an adjacent pair of bits is encoded, skip one bit for each intermediate product.\n\n'
];

const boothsStepA = `<div class = "hanging-indent">
        <b>A.<span class="tab-13"></span>Represent the operands in two's complement.</b>
    </div>
    <div class = "indented hanging-indent">
        1.<span class="tab-13"></span>If the user enters a decimal number, it is represented using the fewest number of bits.
    </div>
    <div class = "indented hanging-indent">
        2.<span class="tab-13"></span>If the user enters a binary number, the number of bits follows the user's input. 
    </div>`;

const boothsStepB = `<div class = "hanging-indent">
        <b>B.<span class="tab-13"></span>If necessary, perform sign extension to make the number of bits of the operands equal.</b>
    </div>`;

const boothsStepC0 = `<div class = "hanging-indent">
        <b>C.<span class="tab-13"></span>Convert the multiplier to its Booth's equivalent.</b>
    </div>`;

const boothsStepC1 = `<div class = "indented hanging-indent">
        1.<span class="tab-13"></span>Append 0 to the least significant bit.
    </div>`;

const boothsStepC2 = `<div class = "indented hanging-indent">
        2.<span class="tab-13"></span>Pair and encode two bits starting at the least significant bit.
    </div>`;

const boothsStepC = `${boothsStepC0}
    ${boothsStepC1}
    ${boothsStepC2}`;

const boothsStepCShowTable = `<div class = "indented-1">
        Click <a onclick = "showBoothsRecoding(); scrollToBoothsRecoding();" class = "with-underline no-decor no-hover" id = "show-booths-recording">here</a> 
        to <span id = "show-hide-booths-recoding">show</span> the encoding table.
    </div>`;

const boothsStepCTableProvision = `<span id = "booths-step-c-table-provision"></span>`;

const boothsStepCTable = `<table class = "indented-2 procedure">
        <tr>
            <th>b<sub>i</sub> b<sub>i-1</sub></th>  
            <th>Conversion<sub></sub></th>
        </tr>
        <tr>
            <td><b>00</b></td>
            <td><b>0</b></td>
        </tr>
        <tr>
            <td><b>01</b></td>
            <td><b>+1</b></td>
        </tr>
        <tr>
            <td><b>10</b></td>
            <td><b>-1</b></td>
        </tr>
        <tr>
            <td><b>11</b></td>
            <td><b>0</b></td>
        </tr>
    </table>`;

const boothsStepD = `<div class = "hanging-indent">
        <b>D.<span class="tab-12"></span>Multiply using pencil-and-paper method &mdash; but ignore the extra step even if the multiplier 
        is negative.<br>
        Since an adjacent pair of bits is encoded, skip <u>one</u> bit for each 
        intermediate product.</b>
    </div>`;

const boothsStepDShowTable = `<div class = "indented-0 small-top-space">
        Click <a onclick = "showBoothsOperations(); scrollToBoothsOperations();" class = "with-underline no-decor no-hover" id = "show-booths-recording">here</a> 
        to <span id = "show-hide-booths-operations">show</span> the multiplication guide.
    </div>`;

const boothsStepDTableProvision = `<span id = "booths-step-d-table-provision"></span>`;

const boothsStepDTable = `<table class = "indented-2 procedure">
        <tr>
            <th>Multiply by</th>
            <th>Procedure</th>
        </tr>
        <tr>
            <td>0</td>
            <td>0</td>
        </tr>
        <tr>
            <td>+1</td>
            <td>Itself</td>
        </tr>
        <tr>
            <td>-1</td>
            <td>Two's complement</td>
        </tr>
    </table>`;

const boothsAlgo = `${boothsIntro}
    ${boothsStepA}
    ${boothsStepB}
    ${boothsStepC}
    ${boothsStepCTable}
    ${boothsStepD}
    ${boothsStepDTable}`;

const algoSteps = [pencilAlgo, boothsAlgo];

/* Verification step at the end of every multiplication algorithm demonstration (simulation) */
const verify = `<span class = "material-icons">check_circle_outline</span><span class = "tab-13"></span><b><u>Verification</u>:</b>`;
