import autobind from 'autobind-decorator';
import Module from '../../module';
import serifs from '../../serifs';
import { genItem } from '../../vocabulary';
import config from '../../config';

export default class extends Module {
	public readonly name = 'noting';

	@autobind
	public install() {
		setInterval(() => {
			if (Math.random() < 0.00625) {
				this.post();
			}
		}, 1000 * 60 * 10);

		return {};
	}

	@autobind
	private post() {
		const notes = [
			...serifs.noting.notes,
			() => {
				const item = genItem();
				return serifs.noting.want(item);
			},
			() => {
				const item = genItem();
				return serifs.noting.see(item);
			},
		];

		const note = notes[Math.floor(Math.random() * notes.length)];

		let visibility = config.defaultVisibility;
		if (!visibility) visibility = 'public';

		this.ai.post({
			visibility: visibility,
			text: typeof note === 'function' ? note() : note
		});
	}
}
