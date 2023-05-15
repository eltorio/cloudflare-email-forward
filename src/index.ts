/*!
=========================================================
* © 2023 Ronan LE MEILLAT
=========================================================
*/
export interface Env {
	RECIPIENTS: string
}

function getRecipients(flatString: string): string[] {
	return flatString.split("|")
}
export default {
	async email(message: EmailMessage, env: Env, ctx: ExecutionContext) {
	  const recipients = getRecipients(env.RECIPIENTS);
	  const promised = [] as Promise<void>[] ;
	  recipients.forEach(recipient => {
		promised.push(message.forward(recipient));
		console.log(`Email forwarded to: ${recipient}`)
	})
	 await Promise.all(promised)
	}
  };