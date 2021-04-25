// License MIT
// Copyright (C) 2018-2021 MathInDOS

class platform {
	constructor() {
	}
	
	isWindows() {
		if (process.platform == 'win32') {
			return true;
		} else {
			return false;
		}
	}
	
	isLinux() {
		if (process.platform == 'linux') {
			return true;
		} else {
			return false;
		}
	}
	
	isAix() {
		if (process.platform == 'aix') {
			return true;
		} else {
			return false;
		}
	}
	
	isDarwin() {
		if (process.platform == 'darwin') {
			return true;
		} else {
			return false;
		}
	}
	
	isFreeBSD() {
		if (process.platform == 'freebsd') {
			return true;
		} else {
			return false;
		}
	}
	
	isOpenBSD() {
		if (process.platform == 'openbsd') {
			return true;
		} else {
			return false;
		}
	}
	
	isSunOS() {
		if (process.platform == 'sunos') {
			return true;
		} else {
			return false;
		}
	}
	
	isUnknown() {
		if (process.platform == 'unknown') {
			return true;
		} else {
			return false;
		}
	}
	
}
